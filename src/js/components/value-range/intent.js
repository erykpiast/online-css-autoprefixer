import Cycle from 'cyclejs';

export default function createValueRangeIntent() {
    var valueRangeIntent = Cycle.createIntent(function (valueRangeView) {
        return {
            rangeInput$: valueRangeView.get('rangeInput$')
                .map(({ target }) => target.value),
            valueInput$: valueRangeView.get('valueInput$')
                .map(({ target }) => target.value)
        };
    });

    return valueRangeIntent;
}
