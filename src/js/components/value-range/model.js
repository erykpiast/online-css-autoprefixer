import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

export default function createValueRangeModel() {
    var valueRangeModel = Cycle.createModel(function (valueRangeIntent, inputAttributes) {
        return {
            value$: Rx.Observable.merge(
                valueRangeIntent.get('rangeInput$'),
                valueRangeIntent.get('valueInput$'),
                inputAttributes.get('value$')
            ),
            min$: inputAttributes.get('min$')
                .startWith(0),
            max$: inputAttributes.get('max$')
                .startWith(100),
            step$: inputAttributes.get('step$')
                .startWith(1),
            disabled$: inputAttributes.get('disabled$')
                .startWith(false)
        };
    });

    return valueRangeModel;
}

