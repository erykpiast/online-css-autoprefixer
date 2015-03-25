import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import mapValues from 'map-values';
import caniuse from 'caniuse-db/data';

var availableBrowsers = mapValues(caniuse.agents, function(browser) {
    return {
        name: browser.browser,
        versions: browser.versions.filter((version) => !!version).map((version) => version.split('-').reverse()[0])
    };
});


function _selectBrowsers(selectedBrowsers, availableBrowsers) {
    return mapValues(availableBrowsers, function(browser, browserKey) {
        return {
            name: browser.name,
            versions: browser.versions.map((version) => ({
                name: version,
                selected: (selectedBrowsers.hasOwnProperty(browserKey) &&
                    (selectedBrowsers[browserKey].indexOf(version) !== -1)) ||
                    ((browserKey === 'firefox') && (version === '31') && (selectedBrowsers.hasOwnProperty(browserKey) && selectedBrowsers[browserKey].indexOf('esr') !== -1))
            }))
        };
    });
}


export default function createSettingsDirectModel() {
    var SettingsDirectModel = Cycle.createModel(function (settingsDirectIntent) {
        return {
            value$: Rx.Observable.combineLatest(
                    settingsDirectIntent.get('valueChange$'),
                    Rx.Observable.just(availableBrowsers),
                    (selectedBrowsers, availableBrowsers) => _selectBrowsers(selectedBrowsers, availableBrowsers)
                )
        };
    });

    return SettingsDirectModel;
}

