import Cycle from 'cyclejs';

export default function createValueRangeIntent() {
    var valueRangeIntent = Cycle.createIntent(function (valueRangeView) {
        return {
            rangeChange$: valueRangeView.get('rangeChange$')
                .map(({ target }) => target.value),
            valueChange$: valueRangeView.get('valueChange$')
                .map(({ target }) => target.value)
        };
    });

    return valueRangeIntent;
}
