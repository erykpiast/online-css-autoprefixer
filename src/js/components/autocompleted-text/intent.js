import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';


export default function createAutocompletedTextIntent() {
    var autocompletedTextIntent = Cycle.createIntent(function (autocompletedTextView, inputAttributes) {
        return {
            valueChange$: Rx.Observable.merge(
                autocompletedTextView.get('change$')
                    .map((ev) => ev.target.value),
                inputAttributes.get('value$')
            )
        };
    });

    return autocompletedTextIntent;
}
