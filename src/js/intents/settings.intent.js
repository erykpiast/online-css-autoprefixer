import Cycle from 'cyclejs';

var SettingsIntent = Cycle.createIntent([ 'settingsChange' ], function (view) {
    return {
        settingsChange: view.settingsChange.map(ev => ev.target.value)
    };
});

export default SettingsIntent;