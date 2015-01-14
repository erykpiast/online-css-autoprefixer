import Cycle from 'cyclejs';
import Rx from 'rx';

import storage from '../services/storage';


var InputIntent = Cycle.createIntent(function (view) {
    return {
        sourceChange$: view.get('inputText$').map(ev => ev.target.value)
            .merge(Rx.Observable.just(storage.read('input'), Rx.Scheduler.timeout))
    };
});

export default InputIntent;