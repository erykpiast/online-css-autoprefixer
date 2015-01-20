import Cycle from 'cyclejs';

export default function createSettingsDirectIntent() {
    var SettingsDirectIntent = Cycle.createIntent(function (view) {
        return {
            settingsChange$: view.get('settingsChange$').map(ev => ev.target.value)
                .startWith(Cycle.Rx.Scheduler.timeout, { })
        };
    });

    return SettingsDirectIntent;
}
