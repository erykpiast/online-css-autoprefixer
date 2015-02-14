import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

import { parse } from '../services/settings-parser';
import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Rx.Observable.merge(
                settingsIntent.get('settingsChange$')
                    .map((rawConfig) => ({
                        browsers: parse(rawConfig),
                        rawConfig: rawConfig
                    })),
                rawConfigIntent.get('rawConfigChange$')
                    .map(function(rawConfig) {
                        var normalizedRawConfig = rawConfig.split(',').map((req) => req.trim()).join(',');

                        try {
                            return {
                                browsers: parse(normalizedRawConfig),
                                rawConfig: rawConfig
                            };
                        } catch(err) { }
                    })
                    .filter((obj) => !!obj)
            )
            .distinctUntilChanged()
            .tap(function({ rawConfig }) {
                // save if parsing didn't raise an error
                storage.save('settings', rawConfig);
            })
            .map(({ browsers }) => browsers)
    };
});

export default SettingsModel;
