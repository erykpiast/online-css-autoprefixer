import Cycle from 'cyclejs';
import { h } from 'cyclejs';
import browserslist from 'browserslist';

var firefoxEsr = browserslist('Firefox ESR').map((browser) => browser.split(' ')[1]);


var componentClass = 'autoprefixer__settings__direct';
var browsersListClass = componentClass + '__browsers';
var browserClass = componentClass + '__browser';


export default function createSettingsDirectView() {
    var SettingsDirectView = Cycle.createView(function (settingsDirectModel) {
        return {
            vtree$: settingsDirectModel.get('value$').map((browsers) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('input', {
                            className: 'accordion__header',
                            id: 'settings__direct__header',
                            type: 'checkbox',
                            checked: false
                        }),
                        h('label', {
                            htmlFor: 'settings__direct__header'
                        }, 'Direct'),
                        h('div', {
                            className: 'accordion__content'
                        },
                            h('ul', {
                                    className: browsersListClass
                                },
                                Object.keys(browsers).map((browserName) => h('li', {
                                        className: browserClass
                                    }, h('fieldset', [
                                        h('legend', browsers[browserName].name),
                                        h('multi-checkbox', {
                                            name: browserName,
                                            value: JSON.stringify(
                                                browsers[browserName].versions
                                                    .reverse()
                                                    .map((version) => ({
                                                        value: version.name,
                                                        label: version.name + (
                                                            (browserName === 'firefox')
                                                                && (firefoxEsr.indexOf(version.name) !== -1) ?
                                                                ' (ESR)' :
                                                                ''
                                                        ),
                                                        checked: version.selected
                                                    }))
                                            ),
                                            onchange: 'valueChange$'
                                        })
                                    ])
                                ))
                            )
                        )
                    ]))
                )
        };
    });

    return SettingsDirectView;
}
