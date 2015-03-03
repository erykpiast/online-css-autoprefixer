import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import { h } from 'cyclejs';


export default function createAutocompletedTextView() {
    var autocompletedTextView = Cycle.createView(function (autocompletedTextModel) {
        return {
            vtree$: Rx.Observable.combineLatest(
                autocompletedTextModel.get('textFieldValue$'),
                autocompletedTextModel.get('autocompletions$'),
                autocompletedTextModel.get('autocompletionsVisible$'),
                autocompletedTextModel.get('selectedAutocompletion$'),
                (value, autocompletions, autocompletionsVisible, selectedAutocompletion) => ({ value, autocompletions, autocompletionsVisible, selectedAutocompletion })
            )
            .map(({ value, autocompletions, autocompletionsVisible, selectedAutocompletion }) =>
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
                        className: selectedAutocompletion === index ? 'is-selected' : ''
                    }, keyword)))
                ])
            )
        };
    });

    return autocompletedTextView;
}
