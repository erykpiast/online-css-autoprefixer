import Cycle from 'cyclejs';


var SettingsIntent = Cycle.createIntent(function (settingsView) {
    return {
        settingsChange$: settingsView.get('settingsChange$')
            .map(({ target }) => {
                try { // quick fix for accordion widget
                    return {
                        [target.name]: JSON.parse(target.value)
                    };
                } catch(err) { }
            }).filter((value) => !!value)
    };
});

export default SettingsIntent;