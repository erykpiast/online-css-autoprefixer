import Cycle from 'cyclejs';
// import Rx from 'rx';

import getJson from '../services/get-json';
import storage from '../services/storage';
import SettingsParser from '../services/settings-parser';


var SettingsModel = Cycle.createModel([ 'settingsChange' ], function (intent) {
    var settingsParser;
    var canIUseData = getJson('https://cdn.rawgit.com/Fyrd/caniuse/master/data.json').then(function(data) {
        settingsParser = new SettingsParser(data);
    });

    return {
        settings: intent.settingsChange
            .skipUntil(canIUseData)
            // .merge(Rx.Observable.fromPromise(canIUseData.then(function() {
            //     return settingsParser.parse(storage.read('settings'));
            // })))
            .map(function(settings) {
                storage.save('settings', settingsParser.stringify(settings));

                return settings;
            })
    };
});

export default SettingsModel;