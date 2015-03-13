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
                (value, min, max, step) =>
                    h('div', [
                        h('input', {
                            type: 'range',
                            value: value,
                            oninput: 'rangeChange$',
                            min: min,
                            max: max,
                            step: step
                        }),
                        h('input', {
                            type: 'number',
                            value: value,
                            oninput: 'valueChange$',
                            min: min,
                            max: max,
                            step: step
                        })
                    ])
            )
        };
    });

    return valueRangeView;
}
