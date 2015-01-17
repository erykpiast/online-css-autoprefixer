import Cycle from 'cyclejs';

import storage from '../services/storage';


var InputIntent = Cycle.createIntent(function (view) {
    return {
        sourceChange$: view.get('inputText$').map(ev => ev.target.value)
            .startWith(Cycle.Rx.Scheduler.timeout, storage.read('input'))
    };
});

export default InputIntent;