import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { h } from 'cyclejs';


export default function createAutocompletedTextView() {
    var autocompletedTextView = Cycle.createView(function (autocompletedTextModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                autocompletedTextModel.get('value$'),
                autocompletedTextModel.get('autocompletions$'),
                autocompletedTextModel.get('selected$'),
                (value, autocompletions, selected) => ({ value, autocompletions, selected })
            )
            .map(({ value, autocompletions, selected }) =>
                h('div', [
                    h('input', {
                        type: 'text',
                        value: value,
                        oninput: 'change$',
                        onkeydown: 'select$'
                    }),
                    h('ul', autocompletions.map((keyword, index) => h('li', {
                        className: selected === index ? 'is-selected' : ''
                    }, keyword)))
                ])
            )
        };
    });

    return autocompletedTextView;
}
