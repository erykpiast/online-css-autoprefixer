import Cycle from 'cyclejs';
import Rx from 'rx';

import getJson from '../services/get-json';
// import storage from '../services/storage';
import SettingsParser from '../services/settings-parser';
import caniuseDataNormalizer from '../services/caniuse-data-normalizer';


var SettingsModel = Cycle.createModel(function (settingsIntent, rawConfigModel) {
    var settingsParser;
    var canIUseData = getJson('https://cdn.rawgit.com/Fyrd/caniuse/master/data.json').then(function(data) {
        settingsParser = new SettingsParser(caniuseDataNormalizer.normalize(data));
    });

    return {
        settings$: settingsIntent.get('settingsChange$')
            .skipUntil(canIUseData)
            .merge(Rx.Observable.fromPromise(canIUseData.then(() =>
                settingsParser.parse('> 1%, last 2 versions, Firefox ESR, Opera 12.1')
            )))
            .merge(rawConfigModel.get('rawConfig$').map(function(rawConfig) {
                try {
                    return settingsParser.parse(rawConfig);
                } catch(err) { }
            }).filter((settings) => 'undefined' !== typeof settings))
            .map(function(settings) {
                // storage.save('settings', settingsParser.stringify(settings));

                return settings;
            })
    };
});

export default SettingsModel;