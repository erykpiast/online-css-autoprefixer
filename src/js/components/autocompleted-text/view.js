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
                autocompletedTextModel.get('autocompletionsVisible$'),
                (value, autocompletions, selected, autocompletionsVisible) => ({ value, autocompletions, selected, autocompletionsVisible })
            )
            .map(({ value, autocompletions, selected, autocompletionsVisible }) =>
                h('div', [
                    h('input', {
                        type: 'text',
                        value: value,
                        oninput: 'change$',
                        onkeydown: 'select$',
                        onfocus: 'focus$',
                        onblur: 'blur$'
                    }),
                    h('ul', {
                        className: autocompletionsVisible ? 'is-visible' : ''
                    }, autocompletions.map((keyword, index) => h('li', {
                        className: selected === index ? 'is-selected' : ''
                    }, keyword)))
                ])
            )
        };
    });

    return autocompletedTextView;
}
