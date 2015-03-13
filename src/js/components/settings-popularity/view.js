import Cycle from 'cyclejs';
import { h } from 'cyclejs';
import { Rx } from 'cyclejs';

var componentClass = 'autoprefixer__settings__popularity';
// var browsersListClass = componentClass + '__browsers';
// var browserClass = componentClass + '__browser';


export default function createsettingsPopularityView() {
    var settingsPopularityView = Cycle.createView(function (settingsPopularityModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                settingsPopularityModel.get('value$'),
                settingsPopularityModel.get('availableCountries$'),
                (selectedCountries, availableCountries) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('legend', 'Popularity'),
                        h('ul', selectedCountries.map((country) => h('li', [
                            h('autocompleted-text', {
                                value: country.country || '',
                                datalist: JSON.stringify(
                                    availableCountries
                                        .map((country) => [ country.name,  country.code ])
                                ),
                                onchange: 'countryNameChange$',
                                index: selectedCountries.length
                            }),
                            h('value-range', {
                                value: country.popularity || 0,
                                min: 0.01,
                                max: 100,
                                step: 0.01
                            })
                        ]))),
                    ])
                )
            )
        };
    });

    return settingsPopularityView;
}
