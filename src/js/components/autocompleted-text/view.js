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
                autocompletedTextModel.get('invalidValue$'),
                (value, autocompletions, autocompletionsVisible, selectedAutocompletion, invalidValue) => ({ value, autocompletions, autocompletionsVisible, selectedAutocompletion, invalidValue })
            )
            .map(({ value, autocompletions, autocompletionsVisible, selectedAutocompletion, invalidValue }) =>
                h('div', [
                    h('input', {
                        type: 'text',
                        value: value,
                        className: invalidValue ? 'is-invalid' : '',
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
