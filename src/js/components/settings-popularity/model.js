import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { i18n as getCountryNames } from 'i18n-iso-countries/en';
import mapValues from 'map-values';
import invertObject from 'invert-kv';
import omit from 'lodash.omit';
import indexBy from 'lodash.indexby';
import mapObjectToArray from 'lodash.map';
import assign from 'lodash.assign';


var fs = require('fs');

var countryNames = getCountryNames();
var countryCodes = invertObject(countryNames);
var availableCountries = fs.readdirSync(__dirname + '/../../../../node_modules/caniuse-db/region-usage-json')
    .map((countryFile) =>
        countryFile.split('.')[0]
    )
    .map((countryCode) => ({
        code: countryCode,
        name: countryNames[countryCode]
    }))
    .filter((country) =>
        ('undefined' !== typeof country.name)
    );


export default function createSettingsPopularityModel() {
    var settingsPopularityModel = Cycle.createModel(function (settingsPopularityIntent) {
        var globalPopularity$ = Rx.Observable.merge(
            settingsPopularityIntent.get('baseChange$')
                .map((base) => base.global),
            settingsPopularityIntent.get('globalPopularityChange$')
        ).distinctUntilChanged();

        var selectedCountries$ = Rx.Observable.merge(
            settingsPopularityIntent.get('countryNameChange$'),
            settingsPopularityIntent.get('countryPopularityChange$')
        ).withLatestFrom(
            settingsPopularityIntent.get('baseChange$')
                .map((base) => omit(base, 'global'))
                .map((base) => mapObjectToArray(base, (popularity, countryCode) => ({
                    name: countryNames[countryCode],
                    code: countryCode,
                    popularity: popularity
                }))),
            (change, current) => {
                if(!current[change.index]) {
                    current[change.index] = {
                        popularity: 0
                    };
                }
                
                if(change.hasOwnProperty('country')) {
                    let name = change.country;
                    let code = countryCodes[name];

                    if(code) {
                        current[change.index].name = name;
                        current[change.index].code = code;
                    }
                }

                if(change.hasOwnProperty('popularity')) {
                    current[change.index].popularity = change.popularity;
                }
                
                return current;
            }
        ).startWith([ {
            name: '',
            code: '',
            popularity: 0
        } ]);

        return {
            value$: Rx.Observable.combineLatest(
                globalPopularity$,
                selectedCountries$
                    .map((selectedCountries) =>
                        mapValues(
                            indexBy(selectedCountries, 'code'),
                            ({ popularity }) => popularity
                        )
                    )
                    .map((byCountryPopularity) => omit(byCountryPopularity, [ 'undefined', '' ])),
                (globalPopularity, byCountryPopularity) => assign({ }, {
                    global: globalPopularity
                }, byCountryPopularity)
            ),
            globalPopularity$: globalPopularity$,
            byCountry$: selectedCountries$
                .map((selectedCountries) => {
                    // add empty slot if the last is filled
                    if(selectedCountries.length) {
                        var lastCountry = selectedCountries[selectedCountries.length - 1];

                        if(!lastCountry.name) {
                            return selectedCountries;
                        }
                    }

                    return selectedCountries.concat([ {
                        name: '',
                        code: '',
                        popularity: 0
                    } ]);
                }),
            availableCountries$: Rx.Observable.just(availableCountries)
        };
    });

    return settingsPopularityModel;
}

