import Cycle from 'cyclejs';
// import { Rx } from 'cyclejs';


export default function createMultiCheckboxModel() {
    var MultiCheckboxModel = Cycle.createModel(function (multiCheckboxIntent) {
        return {
            value$: multiCheckboxIntent.get('valueChange$')
        };
    });

    return MultiCheckboxModel;
}

