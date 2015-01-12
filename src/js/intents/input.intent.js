import Cycle from 'cyclejs';

var InputIntent = Cycle.createIntent(function (view) {
    return {
        sourceChange$: view.get('inputText$').map(ev => ev.target.value)
    };
});

export default InputIntent;