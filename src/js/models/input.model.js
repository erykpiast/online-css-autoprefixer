import Cycle from 'cyclejs';

var InputModel = Cycle.createModel([ 'sourceChange' ], function (intent) {
    return {
        source: intent.sourceChange.startWith('')
    };
});

export default InputModel;