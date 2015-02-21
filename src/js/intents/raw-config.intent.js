import Cycle from 'cyclejs';

import storage from '../services/storage';


var RawConfigIntent = Cycle.createIntent(function (view) {
    return {
        rawConfigChange$: view.get('rawConfigChange$')
            .map(ev => ev.target.value)
            .startWith(Cycle.Rx.Scheduler.timeout, storage.read('settings') || '> 1%, last 2 versions, Firefox ESR, Opera 12.1')
    };
});

export default RawConfigIntent;
