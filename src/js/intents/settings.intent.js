import Cycle from 'cyclejs';


var SettingsIntent = Cycle.createIntent(function (settingsView) {
    return {
        settingsChange$: settingsView.get('settingsChange$')
            .map(function({ target }) {
                return {
                    [target.name]: JSON.parse(target.value)
                };
            })
    };
});

export default SettingsIntent;