import Cycle from 'cyclejs';

import storage from '../services/storage';


var RawConfigModel = Cycle.createModel(function (intent) {
    return {
        rawConfig$: intent.get('rawConfigChange$')
            .startWith(storage.read('settings'))
            .map(function(settings) {
                storage.save('settings', settings);

                return settings;
            })
    };
});

export default RawConfigModel;