import Cycle from 'cyclejs';
import { h } from 'cyclejs';
import { Rx } from 'cyclejs';

var componentClass = 'autoprefixer__settings__popularity';


// make already chosen countries unavailable in other widgets
function _getAvailableCountries(availableCountries, selectedCountries, current) {
    var selectedCodes = selectedCountries.map(({ code }) => code);

    return availableCountries.filter((country) =>
        (country.code === current.code) ||
        (selectedCodes.indexOf(country.code) === -1)
    );
}


export default function createsettingsPopularityView() {
    var settingsPopularityView = Cycle.createView(function (settingsPopularityModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                settingsPopularityModel.get('globalPopularity$'),
                settingsPopularityModel.get('byCountry$'),
                settingsPopularityModel.get('availableCountries$'),
                (globalPopularity, byCountry, availableCountries) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('legend', 'Popularity'),
                        h('fieldset', {
                            className: componentClass + '__global'
                        }, [
                            h('legend', 'Global'),
                            h('value-range', {
                                value: globalPopularity || 0,
                                min: 0,
                                max: 100,
                                step: 0.01,
                                onchange: 'globalPopularityChange$',
                                id: 'global-popularity'
                            }),
                        ]),
                        h('fieldset', {
                            className: componentClass + '__country'
                        }, [
                            h('legend', 'By country'),
                            h('ul', {
                                className: componentClass + '__country__list'
                            }, byCountry.map((country, index) => h('li', {
                                className: componentClass + '__country__list__country'
                            }, [
                                h('autocompleted-text', {
                                    value: country.name || '',
                                    datalist: JSON.stringify(
                                        _getAvailableCountries(availableCountries, byCountry, country)
                                            .map(({ name, code }) => [ name, code ])
                                    ),
                                    onchange: 'countryNameChange$',
                                    index: index
                                }),
                                h('value-range', {
                                    value: country.popularity || 0,
                                    disabled: !country.name,
                                    min: 0,
                                    max: 100,
                                    step: 0.01,
                                    onchange: 'countryPopularityChange$',
                                    index: index
                                })
                            ])))
                        ])
                    ])
                )
            )
        };
    });

    return settingsPopularityView;
}
