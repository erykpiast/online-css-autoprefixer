import Cycle from 'cyclejs';

// import storage from '../services/storage';


var RawConfigModel = Cycle.createModel(function (intent) {
    return {
        rawConfig$: intent.get('rawConfigChange$')
            .startWith('> 1%, last 2 versions, Firefox ESR, Opera 12.1')
            .map(function(rawConfig) {
                // storage.save('settings', rawConfig);

                return rawConfig;
            })
    };
});

export default RawConfigModel;