import Cycle from 'cyclejs';

export var HelloModel = Cycle.createModel([ 'sourceChange' ], function (intent) {
    return {
        source: intent.sourceChange
    };
});