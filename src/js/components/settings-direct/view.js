import Cycle from 'cyclejs';
import mapValues from 'map-values';
import caniuse from 'caniuse-db/data';

var h = Cycle.h;

var availableBrowsers = mapValues(caniuse.agents, function(browser) {
    return {
        name: browser.browser,
        versions: browser.versions.filter((version) => !!version).map((version) => version.split('-').reverse()[0])
    };
});

var componentClass = 'autoprefixer__settings__direct';
var browsersListClass = componentClass + '__browsers';
var browserClass = componentClass + '__browser';
var browserVersionsClass = browserClass + '__versions';
var browserVersionClass = browserClass + '__version';


export default function createSettingsDirectView() {
    var SettingsDirectView = Cycle.createView(function (settingsModel) {
        return {
            vtree$: Cycle.Rx.Observable.combineLatest(
                    settingsModel.get('selectedBrowsers$'),
                    Cycle.Rx.Observable.just(availableBrowsers, Cycle.Rx.Scheduler.timeout),
                    (selectedBrowsers, availableBrowsers) => [ selectedBrowsers, availableBrowsers ]
                ).map(([ selectedBrowsers, availableBrowsers ]) => h('form', {
                        className: componentClass
                    }, h('fieldset', [
                        h('legend', {}, 'Direct'),
                        h('ul', {
                                className: browsersListClass
                            },
                            Object.keys(availableBrowsers).map((browserName) => h('li', {
                                    className: browserClass
                                }, h('fieldset', [
                                    h('legend', availableBrowsers[browserName].name),
                                    h('ul', {
                                            className: browserVersionsClass
                                        },
                                        availableBrowsers[browserName].versions.map((browserVersion) => h('li', {
                                                className: browserVersionClass
                                            }, [
                                                h('input', {
                                                    id: browserName + '_' + browserVersion,
                                                    type: 'checkbox',
                                                    checked: selectedBrowsers[browserName] &&
                                                        selectedBrowsers[browserName].versions.indexOf(browserVersion) !== -1,
                                                    onchange: 'selectedBrowsersChange$'
                                                }),
                                                h('label', {
                                                    htmlFor: browserName + '_' + browserVersion
                                                }, browserVersion)
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
