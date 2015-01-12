import Cycle from 'cyclejs';

var SettingsIntent = Cycle.createIntent(function (view) {
    return {
        settingsChange$: view.get('settingsChange$').map(ev => ev.target.value)
    };
});

export default SettingsIntent;