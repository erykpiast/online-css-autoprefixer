import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

const UP = 38;
const DOWN = 40;
const ENTER = 13;


export default function createAutocompletedTextIntent() {
    var autocompletedTextIntent = Cycle.createIntent(function (autocompletedTextView, inputAttributes) {
        // var controlKeys = [ UP, DOWN, ENTER ];
        
        var up$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === UP));
        var down$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === DOWN));
        var enter$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode === ENTER));
        
        var notEnter$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (keyCode !== ENTER));
        // var notControlKey$ = autocompletedTextView.get('select$').filter(({ keyCode }) => (controlKeys.indexOf(keyCode) === -1));

        return {
            valueChange$: Rx.Observable.merge(
                autocompletedTextView.get('change$')
                    .map(({ target }) => target.value),
                inputAttributes.get('value$')
            ).distinctUntilChanged(),
            selectedAutocompletionInput$: Rx.Observable.merge(
                up$.map(() => -1),
                down$.map(() => 1)
            ).startWith(0),
            selectedAutocompletionChange$: enter$,
            showAutocompletions$: Rx.Observable.merge(
                notEnter$,
                autocompletedTextView.get('focus$')
            ),
            hideAutocompletions$: Rx.Observable.merge(
                enter$,
                autocompletedTextView.get('blur$')
            ),
            finish$: autocompletedTextView.get('blur$')
        };
    });

    return autocompletedTextIntent;
}
