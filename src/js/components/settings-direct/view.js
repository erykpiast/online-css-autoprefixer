import Cycle from 'cyclejs';
import { h } from 'cyclejs';
import browserslist from 'browserslist';

// var firefoxEsr = browserslist('Firefox ESR').map((browser) => browser.split(' ')[1]);


var componentClass = 'autoprefixer__settings__direct';
var browsersListClass = componentClass + '__browsers';
var browserClass = componentClass + '__browser';;


export default function createSettingsDirectView() {
    var SettingsDirectView = Cycle.createView(function (settingsDirectModel) {
        return {
            vtree$: settingsDirectModel.get('browsers$').map((browsers) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('legend', {}, 'Direct'),
                        h('ul', {
                                className: browsersListClass
                            },
                            Object.keys(browsers).map((browserName) => h('li', {
                                    className: browserClass
                                }, h('fieldset', [
                                    h('legend', browsers[browserName].name),
                                    h('multi-checkbox', {
                                        value: JSON.stringify(browsers[browserName].versions)
                                    })/*
                                    h('ul', {
                                            className: browserVersionsClass
                                        },
                                        browsers[browserName].versions
                                            .reverse()
                                            .map((browserVersion) => h('li', {
                                                className: browserVersionClass
                                            }, [
                                                h('input', {
                                                    id: browserName + '_' + browserVersion.name,
                                                    type: 'checkbox',
                                                    checked: browserVersion.selected,
                                                    onchange: 'settingsChange$',
                                                    'data-version': browserVersion.name
                                                }),
                                                h('label', {
                                                    htmlFor: browserName + '_' + browserVersion.name
                                                }, browserVersion.name +
                                                    ((browserName === 'firefox') && (firefoxEsr.indexOf(browserVersion.name) !== -1) ?
                                                        ' (ESR)' :
                                                        ''
                                                    )
                                                )
                                            ])
                                        )
                                    )*/
                                ])
                            ))
                        )
                    ]))
                )
        };
    });

    return SettingsDirectView;
}
