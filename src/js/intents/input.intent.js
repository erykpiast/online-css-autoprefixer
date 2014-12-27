import Cycle from 'cyclejs';

export var InputIntent = Cycle.createIntent([ 'sourceChange' ], function (view) {
    return {
        source: view.sourceChange.map(function (ev) {
            return ev.target.value;
        })
    };
});