import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

export default function createValueRangeModel() {
    var valueRangeModel = Cycle.createModel(function (valueRangeIntent, inputAttributes) {
        return {
            value$: Rx.Observable.merge(
                valueRangeIntent.get('rangeChange$'),
                valueRangeIntent.get('valueChange$'),
                inputAttributes.get('value$')
            ),
            min$: inputAttributes.get('min$'),
            max$: inputAttributes.get('max$'),
            step$: inputAttributes.get('step$')
        };
    });

    return valueRangeModel;
}

