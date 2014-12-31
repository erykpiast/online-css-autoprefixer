import Cycle from 'cyclejs';

import storage from '../services/storage';


var InputModel = Cycle.createModel([ 'sourceChange' ], function (intent) {
    return {
        source: intent.sourceChange
            .startWith(storage.read('input'))
            .map(function(input) {
                storage.save('input', input);

                return input;
            })
    };
});

export default InputModel;