import Cycle from 'cyclejs';
import Rx from 'rx';

import getJson from '../services/get-json';
import storage from '../services/storage';
import SettingsParser from '../services/settings-parser';
import caniuseDataNormalizer from '../services/caniuse-data-normalizer';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigIntent) {
    return {
        settings$: Rx.Observable.merge(
                settingsIntent.get('settingsChange$'),
                Rx.Observable.combineLatest(
                    rawConfigIntent.get('rawConfigChange$'),
                    Rx.Observable.fromPromise(
                        getJson('https://cdn.rawgit.com/Fyrd/caniuse/master/data.json').then((data) =>
                            new SettingsParser(caniuseDataNormalizer.normalize(data))
                        )
                    ),
                    (rawConfig, settingsParser) => [ rawConfig, settingsParser ]
                )
                .map(function([ rawConfig, settingsParser ]) {
                    try {
                        var settings = settingsParser.parse(rawConfig);

                        storage.save('settings', rawConfig);

                        return settings;
                    } catch(err) { }
                })
                .filter((settings) =>
                    'undefined' !== typeof settings
                )
            )
            .map(function(settings) {
                // storage.save('settings', settingsParser.stringify(settings));

                return settings;
            })
    };
});

export default SettingsModel;