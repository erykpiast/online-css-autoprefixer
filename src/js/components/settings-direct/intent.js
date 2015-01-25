import Cycle from 'cyclejs';

export default function createSettingsDirectIntent() {
    var SettingsDirectIntent = Cycle.createIntent(function (settingsDirectView, attributes) {
        return {
            selectedBrowsersChange$: Cycle.Rx.Observable.merge(
                settingsDirectView.get('selectedBrowsersChange$').map(ev => ev.target.value),
                attributes.get('selectedBrowsers$')
                    .map((ev) => JSON.parse(ev.attrValue))
            )
        };
    });

    return SettingsDirectIntent;
}
