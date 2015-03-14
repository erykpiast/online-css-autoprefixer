import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { h } from 'cyclejs';


export default function createValueRangeView() {
    var valueRangeView = Cycle.createView(function (valueRangeModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                valueRangeModel.get('value$'),
                valueRangeModel.get('min$'),
                valueRangeModel.get('max$'),
                valueRangeModel.get('step$'),
                valueRangeModel.get('disabled$'),
                (value, min, max, step, disabled) =>
                    h('div', [
                        h('input', {
                            type: 'range',
                            value: value,
                            oninput: 'rangeInput$',
                            min: min,
                            max: max,
                            step: step,
                            disabled: disabled
                        }),
                        h('input', {
                            type: 'number',
                            value: value,
                            oninput: 'valueInput$',
                            min: min,
                            max: max,
                            step: step,
                            disabled: disabled
                        })
                    ])
            )
        };
    });

    return valueRangeView;
}
