import Cycle from 'cyclejs';

export default function createSettingsDirectIntent() {
    var SettingsDirectIntent = Cycle.createIntent(function (settingsDirectView, attributes) {
        return {
            selectedBrowsersChange$: Cycle.Rx.Observable.merge(
                settingsDirectView.get('selectedBrowsersChange$').map(ev => ev.target.value),
                attributes.get('selectedBrowsers$').map(function(ev) { console.log(ev); return ev; }).map(ev => JSON.parse(ev.attrValue))
            )
            .startWith(Cycle.Rx.Scheduler.timeout, { })
        };
    });

    return SettingsDirectIntent;
}
