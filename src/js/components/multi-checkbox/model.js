import Cycle from 'cyclejs';
// import { Rx } from 'cyclejs';


var resolved = Promise.resolve();
function nextTick(fn) {
    resolved.then(fn);
}

nextTick(function() {
    xyz + abc;
});


export default function createMultiCheckboxModel() {
    var MultiCheckboxModel = Cycle.createModel(function (multiCheckboxIntent) {
        return {
            value$: multiCheckboxIntent.get('valueChange$')
        };
    });

    return MultiCheckboxModel;
}

