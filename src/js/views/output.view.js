import Cycle from 'cyclejs';

var h = Cycle.h;

var OutputView = Cycle.createView([ 'prefixed' ], function (model) {
    return {
        events: [ ],
        vtree$: model.prefixed.map(prefixed => h('div.autoprefixer__view.autoprefixer__view--output.autoprefixer__output', {}, [
            h('label.autoprefixer__output__label', {},'Prefixed CSS:'),
            h('output.autoprefixer__output__content', {
                'value': prefixed
            })
        ]))
  };
});

export default OutputView;
