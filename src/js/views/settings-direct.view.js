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


function settingsDirectView(settings) {

    return h('form.autoprefixer__settings__direct', {}, [
        h('fieldset', {}, [
            h('legend', {}, 'Direct'),
            h('ul', {}, Object.keys(availableBrowsers).map((browserName) => h('li', { }, [
                h('fieldset', {}, [
                    h('legend', {}, availableBrowsers[browserName].name),
                    h('ul', {}, availableBrowsers[browserName].forEach((browserVersion) => h('li', { }, [
                        h('input[type=checkbox][id="' + (browserName + '_' + browserVersion) + '"]', { checked: settings[browserName].versions.indexOf(browserVersion) !== -1 }),
                        h('label[for="' + (browserName + '_' + browserVersion) + '"]', { }, browserVersion)
                    ])))
                ])
            ])))
        ])
    ]);
}

export default settingsDirectView;
