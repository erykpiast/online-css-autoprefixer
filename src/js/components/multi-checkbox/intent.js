import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import cloneDeep from 'lodash.clonedeep';


export default function createMultiCheckboxIntent() {
    var multiCheckboxIntent = Cycle.createIntent(function (multiCheckboxView, inputAttributes) {
        return {
            valueChange$: Rx.Observable.combineLatest(
                multiCheckboxView.get('change$')
                    .map((ev) => ({
                        value: ev.target.value,
                        checked: ev.target.checked
                    }))
                    .startWith({}),
                inputAttributes.get('value$')
                    .map((json) => JSON.parse(json)),
                (modifiedOption, attributeValue) =>
                    cloneDeep(attributeValue)
                        .map(function(option) {
                            if(option.value === modifiedOption.value) {
                                option.checked = modifiedOption.checked;
                            }

                            return option;
                        })
            )
            .distinctUntilChanged((value) => JSON.stringify(value))
        };
    });

    return multiCheckboxIntent;
}
