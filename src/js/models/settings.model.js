import Cycle from 'cyclejs';
import browserslist from 'browserslist';
import groupBy from 'lodash.groupby';
import mapValues from 'map-values';

import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Cycle.Rx.Observable.merge(
                settingsIntent.get('settingsChange$'),
                rawConfigIntent.get('rawConfigChange$')
                    .map(function(rawConfig) {
                        var normalizedRawConfig = rawConfig.split(',').map((req) => req.trim()).join(',');
                        var browsers;

                        try {
                            browsers = browserslist(normalizedRawConfig);
                        } catch(err) {
                            console.log(err);
                            
                            return undefined;
                        }

                        // save if parsing didn't raise an error
                        storage.save('settings', rawConfig);

                        return browsers;
                    })
                    .filter((browsers) => !!browsers)
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
            )
            .map(function(settings) {
                // storage.save('settings', settingsParser.stringify(settings));

                return settings;
            })
    };
});

export default SettingsModel;