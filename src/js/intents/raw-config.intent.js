import Cycle from 'cyclejs';

var RawConfigIntent = Cycle.createIntent(function (view) {
    return {
        rawConfigChange$: view.get('rawConfigChange$').map(ev => ev.target.value)
    };
});

export default RawConfigIntent;