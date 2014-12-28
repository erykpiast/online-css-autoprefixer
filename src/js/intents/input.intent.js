import Cycle from 'cyclejs';

var InputIntent = Cycle.createIntent([ 'inputText' ], function (view) {
    return {
        sourceChange: view.inputText.map(ev => ev.target.value)
    };
});

export default InputIntent;