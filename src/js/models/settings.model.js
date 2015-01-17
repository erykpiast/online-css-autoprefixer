import Cycle from 'cyclejs';
import Rx from 'rx';
import browserslist from 'browserslist';
import groupBy from 'lodash.groupby';
import mapValues from 'map-values';

// import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Rx.Observable.merge(
                settingsIntent.get('settingsChange$'),
                rawConfigIntent.get('rawConfigChange$')
                    .map(function(rawConfig) {
                        try {
                            return browserslist(rawConfig.split(',').map((req) => req.trim()).join(','));
                        } catch(err) {
                            console.log(err);
                        }
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