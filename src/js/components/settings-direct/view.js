import Cycle from 'cyclejs';
import { h } from 'cyclejs';


var componentClass = 'autoprefixer__settings__direct';
var browsersListClass = componentClass + '__browsers';
var browserClass = componentClass + '__browser';
var browserVersionsClass = browserClass + '__versions';
var browserVersionClass = browserClass + '__version';


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
                                    h('ul', {
                                            className: browserVersionsClass
                                        },
                                        browsers[browserName].versions.map((browserVersion) => h('li', {
                                                className: browserVersionClass
                                            }, [
                                                h('input', {
                                                    id: browserName + '_' + browserVersion.name,
                                                    type: 'checkbox',
                                                    checked: browserVersion.selected,
                                                    onchange: 'settingsChange$'
                                                }),
                                                h('label', {
                                                    htmlFor: browserName + '_' + browserVersion.name
                                                }, browserVersion.name)
                                            ])
                                        )
                                    )
                                ])
                            ))
                        )
                    ]))
                )
        };
    });

    return SettingsDirectView;
}
