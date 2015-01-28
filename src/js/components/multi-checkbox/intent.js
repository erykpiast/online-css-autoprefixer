import Cycle from 'cyclejs';

export default function createMultiCheckboxIntent() {
    var multiCheckboxIntent = Cycle.createIntent(function (multiCheckboxView, attributes) {
        return {
            valueChange$: Cycle.Rx.Observable.merge(
                multiCheckboxView.get('change').map(ev => ev.target.value),
                attributes.get('value$')
                    .map((ev) => JSON.parse(ev.attrValue))
            )
        };
    });

    return multiCheckboxIntent;
}
