import Cycle from 'cyclejs';

var h = Cycle.h;

var InputView = Cycle.createView([ 'source' ], function (model) {
    return {
        events: [ 'inputText' ],
        vtree$: model.source.map(source => h('div.autoprefixer__view.autoprefixer__view--input.autoprefixer__input', {}, [
            h('label.autoprefixer__input__label', {},'Your CSS:'),
            h('textarea.autoprefixer__input__content', {
                'ev-input': 'inputText',
                'value': source
            })
        ]))
  };
});

export default InputView;
