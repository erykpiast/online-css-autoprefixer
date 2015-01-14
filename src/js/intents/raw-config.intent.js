import Cycle from 'cyclejs';
import Rx from 'rx';

import storage from '../services/storage';


var RawConfigIntent = Cycle.createIntent(function (view) {
    return {
        rawConfigChange$: view.get('rawConfigChange$').map(ev => ev.target.value)
            .merge(Rx.Observable.just(storage.read('settings'), Rx.Scheduler.timeout))
    };
});

export default RawConfigIntent;