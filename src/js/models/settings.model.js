import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

import { parse } from '../services/browserslist';
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
                        // raw config could be not parsable sometime
                        try {
                            return {
                                browsers: parse(rawConfig),
                                rawConfig: rawConfig
                            };
                        } catch(err) { }
                    })
                    .filter((obj) => !!obj)
            )
            .distinctUntilChanged(({ rawConfig }) => rawConfig)
            .tap(function({ rawConfig }) {
                // save if parsing didn't raise an error and config is different than before
                storage.save('settings', rawConfig);
            })
            .map(({ browsers }) => browsers)
    };
});

export default SettingsModel;
