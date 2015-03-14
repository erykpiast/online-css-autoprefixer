import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import assign from 'lodash.assign';

import { parse, stringify } from '../services/settings-parser';
import { loadStatisticsFor } from '../services/browserslist';
import { parse as listBrowsersForPattern } from '../services/browserslist';
import storage from '../services/storage';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Rx.Observable.merge(
            settingsIntent.get('settingsChange$'),
            rawConfigIntent.get('rawConfigChange$')
                .map((rawConfig) => {
                    // raw config can be not parsable, it's user input
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
        .tap(({ rawConfig }) => {
            // save if parsing didn't raise an error and config is different than was before
            storage.save('settings', rawConfig);
        })
        .flatMap(({ settings, rawConfig }) => {
            // download regional usage data if needed and continue after that
            if(settings.hasOwnProperty('popularity')) {
                return Promise.all(
                    Object.keys(settings.popularity)
                        .map((region) => loadStatisticsFor(region))
                ).then(() => {
                    return { settings, rawConfig };
                }, (err) => {
                    console.error('fetching error', err);

                    return { settings, rawConfig };
                });
            }

            return true;
        })
        .map(({ settings, rawConfig }) => ({
            settings: settings,
            rawConfig: rawConfig,
            browsers: listBrowsersForPattern(rawConfig)
        }))
    };
});

export default SettingsModel;
