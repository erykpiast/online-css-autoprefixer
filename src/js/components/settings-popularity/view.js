import Cycle from 'cyclejs';
import { h } from 'cyclejs';

var componentClass = 'autoprefixer__settings__popularity';
// var browsersListClass = componentClass + '__browsers';
// var browserClass = componentClass + '__browser';


export default function createsettingsPopularityView() {
    var settingsPopularityView = Cycle.createView(function (settingsPopularityModel) {
        return {
            vtree$: settingsPopularityModel.get('value$')
                .map(({ availableCountries/*, selectedCountries*/ }) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('legend', 'Popularity'),
                        h('autocompleted-text', {
                            value: '',
                            datalist: JSON.stringify(
                                availableCountries
                                    .map((country) => [ country.name,  country.code ])
                            )
                        })
                    ])
                )
            )
        };
    });

    return settingsPopularityView;
}
