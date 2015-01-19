import Cycle from 'cyclejs';

export default function createSettingsDirectModel() {
    var SettingsDirectModel = Cycle.createModel(function (settingsDirectIntent) {
        return {
            settings$: settingsDirectIntent.get('settingsChange$')
        };
    });

    return SettingsDirectModel;
}