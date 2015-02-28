import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { h } from 'cyclejs';


export default function createAutocompletedTextView() {
    var autocompletedTextView = Cycle.createView(function (autocompletedTextModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                autocompletedTextModel.get('value$'),
                autocompletedTextModel.get('autocompletions$')
                    .tap(console.log.bind(console, 'autocompletions$')),
                (value, autocompletions) => ({ value, autocompletions })
            )
            .map(({ value, autocompletions }) =>
                h('div', [
                    h('input', {
                        type: 'text',
                        value: value,
                        oninput: 'change$'
                    }),
                    h('ul', autocompletions.map((keyword) => h('li', keyword)))
                ])
            )
        };
    });

    return autocompletedTextView;
}
