import Cycle from 'cyclejs';
import Rx from 'rx';

import getJson from '../services/get-json';
import storage from '../services/storage';
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
                settingsParser.parse(
                    storage.read('settings')
                )
            )))
            .merge(rawConfigModel.get('rawConfig$').map((rawConfig) => settingsParser.parse(rawConfig)))
            .map(function(settings) {
                storage.save('settings', settingsParser.stringify(settings));

                return settings;
            })
    };
});

export default SettingsModel;