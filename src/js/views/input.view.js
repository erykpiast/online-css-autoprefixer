import Cycle from 'cyclejs';
import { h } from 'cyclejs';


var InputView = Cycle.createView(function (model) {
    return {
        vtree$: model.get('source$').map(source => h('div.autoprefixer__view.autoprefixer__view--input.autoprefixer__input', {}, [
            h('label.autoprefixer__input__label', {},'Your CSS:'),
            h('textarea.autoprefixer__input__content', {
                'oninput': 'inputText$',
                'value': source
            })
        ]))
  };
});

export default InputView;
