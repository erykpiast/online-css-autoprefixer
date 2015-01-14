import Cycle from 'cyclejs';


var RawConfigModel = Cycle.createModel(function (intent) {
    return {
        rawConfig$: intent.get('rawConfigChange$')
            .map(function(rawConfig) {
                return rawConfig;
            })
    };
});

export default RawConfigModel;