import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { i18n as getCountryNames } from 'i18n-iso-countries/en';

var fs = require('fs');

var countryNames = getCountryNames();
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
        return {
            value$: Rx.Observable.combineLatest(
                    settingsPopularityIntent.get('valueChange$'),
                    Rx.Observable.just(availableCountries),
                    (selectedCountries, availableCountries) => ({ availableCountries, selectedCountries })
                )
        };
    });

    return settingsPopularityModel;
}
