import Cycle from 'cyclejs';
import mapValues from 'map-values';
import caniuse from 'caniuse-db/data';

var h = Cycle.h;

var availableBrowsers = mapValues(caniuse.agents, function(browser) {
    return {
        name: browser.browser,
        versions: browser.versions.filter((version) => !!version).map((version) => version.split('-')[1])
    };
});


export default function createSettingsDirectView() {
    var SettingsDirectView = Cycle.createView(function(settings) {
        return {
            vtree$: settings.get('settings$').map((settings) => h('form.autoprefixer__settings__direct', {}, [
                h('fieldset', {}, [
                    h('legend', {}, 'Direct'),
                    h('ul', {}, Object.keys(availableBrowsers).map((browserName) => h('li', { }, [
                        h('fieldset', {}, [
                            h('legend', {}, availableBrowsers[browserName].name),
                            h('ul', {}, availableBrowsers[browserName].versions.forEach((browserVersion) => h('li', { }, [
                                h('input[type=checkbox][id="' + (browserName + '_' + browserVersion) + '"]', { checked: settings[browserName].versions.indexOf(browserVersion) !== -1 }),
                                h('label[for="' + (browserName + '_' + browserVersion) + '"]', { }, browserVersion)
                            ])))
                        ])
                    ])))
                ])
            ]))
        };
    });

    return SettingsDirectView;
}
