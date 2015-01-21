import Cycle from 'cyclejs';

export default function createSettingsDirectModel() {
    var SettingsDirectModel = Cycle.createModel(function (settingsDirectIntent) {
        return {
            selectedBrowsers$: settingsDirectIntent.get('selectedBrowsersChange$')
        };
    });

    return SettingsDirectModel;
}
