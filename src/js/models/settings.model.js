import Cycle from 'cyclejs';

import settingsParser from '../services/settings-parser';
import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Cycle.Rx.Observable.merge(
                settingsIntent.get('settingsChange$')
                    .map((settings) => settingsParser.stringify(settings)),
                rawConfigIntent.get('rawConfigChange$')
            )
            .map(function(rawConfig) {
                var normalizedRawConfig = rawConfig.split(',').map((req) => req.trim()).join(',');

                try {
                    return {
                        browsers: settingsParser.parse(normalizedRawConfig),
                        rawConfig: rawConfig
                    };
                } catch(err) { }
            })
            .filter((obj) => !!obj)
            .tap(function({ rawConfig }) {
                // save if parsing didn't raise an error
                storage.save('settings', rawConfig);
            })
            .map(({ browsers }) => browsers)
    };
});

export default SettingsModel;
