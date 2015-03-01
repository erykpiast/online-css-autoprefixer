import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

const UP = 38;
const DOWN = 40;
const ENTER = 13;


export default function createAutocompletedTextIntent() {
    var autocompletedTextIntent = Cycle.createIntent(function (autocompletedTextView, inputAttributes) {
        var up$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === UP));
        var down$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === DOWN));
        var enter$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === ENTER));

        return {
            valueChange$: Rx.Observable.merge(
                autocompletedTextView.get('change$')
                    .map(({ target }) => target.value),
                inputAttributes.get('value$')
            ),
            selectedInput$: Rx.Observable.merge(
                up$.map(() => -1),
                down$.map(() => 1)
            ).startWith(0),
            selectedChange$: enter$
        };
    });

    return autocompletedTextIntent;
}
