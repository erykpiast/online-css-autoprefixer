import Cycle from 'cyclejs';

import storage from '../services/storage';


var InputModel = Cycle.createModel(function (intent) {
    return {
        source$: intent.get('sourceChange$')
            .map(function(input) {
                storage.save('input', input);

                return input;
            })
    };
});

export default InputModel;