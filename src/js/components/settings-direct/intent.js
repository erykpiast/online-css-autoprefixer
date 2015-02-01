import Cycle from 'cyclejs';
import mapValues from 'map-values';


export default function createSettingsDirectIntent() {
    var SettingsDirectIntent = Cycle.createIntent(function (settingsDirectView, attributes) {
        return {
            selectedBrowsersChange$: Cycle.Rx.Observable.combineLatest(
                settingsDirectView.get('selectedBrowsersChange$')
                    .map(function(ev) {
                        var parsedValue;
                        try {
                            // workaround for events bubbled from checkboxes inside multi-checkbox components
                            parsedValue = JSON.parse(ev.target.value);
                        } catch(err) {
                            return;
                        }

                        return {
                            name: ev.target.name,
                            versions: parsedValue
                                .filter((version) => version.checked)
                                .map((version) => version.value)
                        };
                    })
                    .filter((value) => !!value)
                    .startWith({ }),
                attributes.get('selectedBrowsers$')
                    .map((json) => JSON.parse(json)),
                (modifiedBrowser, attributeValue) =>
                    mapValues(attributeValue, function(browserVersions, browserName) {
                        if(browserName === modifiedBrowser.name) {
                            return modifiedBrowser.versions;
                        }

                        return browserVersions;
                    })
            )
        };
    });

    return SettingsDirectIntent;
}
