import Cycle from 'cyclejs';
import browserslist from 'browserslist';
import groupBy from 'lodash.groupby';
import mapValues from 'map-values';

import storage from '../services/storage';
import stringifySettings from '../services/stringify-settings';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Cycle.Rx.Observable.merge(
                settingsIntent.get('settingsChange$')
                    .map((settings) => stringifySettings(settings)),
                rawConfigIntent.get('rawConfigChange$')
            )
            .map(function(rawConfig) {
                var normalizedRawConfig = rawConfig.split(',').map((req) => req.trim()).join(',');

                try {
                    return {
                        browsers: browserslist(normalizedRawConfig),
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
            .map((browsers) => mapValues(
                groupBy(
                    browsers.map((browser) => ({
                        browser: browser.split(' ')[0],
                        version: browser.split(' ')[1]
                    })),
                    'browser'
                ),
                (browserVersions) => browserVersions.map(
                    (browserVersion) => browserVersion.version
                )
            ))
    };
});

export default SettingsModel;
