import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import assign from 'lodash.assign';

import { parse, stringify } from '../services/settings-parser';
import { parse as listBrowsersForPattern } from '../services/browserslist';
import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Rx.Observable.merge(
            settingsIntent.get('settingsChange$'),
            rawConfigIntent.get('rawConfigChange$')
                .map(function(rawConfig) {
                    // raw config could be not parsable sometime
                    try {
                        return parse(rawConfig);
                    } catch(err) { }
                })
                .filter((obj) => !!obj)
        )
        .scan({ }, (settings, newSettings) => 
           assign(settings, newSettings)
        )
        .map((settings) => ({
            settings: settings,
            rawConfig: stringify(settings) // remove whitespace between and sort
                .split(',')
                .map((req) => req.trim())
                .sort()
                .join(',')
        }))
        .distinctUntilChanged(({ rawConfig }) => rawConfig)
        .tap(function({ rawConfig }) {
            // save if parsing didn't raise an error and config is different than before
            storage.save('settings', rawConfig);
        })
        .map(({ settings, rawConfig }) => ({
            settings: settings,
            rawConfig: rawConfig,
            browsers: listBrowsersForPattern(rawConfig)
        }))
    };
});

export default SettingsModel;
