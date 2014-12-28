import Cycle from 'cyclejs';

var h = Cycle.h;

var InputView = Cycle.createView([ 'source' ], function (model) {
    return {
        events: [ 'inputText' ],
        vtree$: model.source.map(source => h('div', {}, [
            h('label', {},'Your CSS:'),
            h('textarea', {
                'ev-input': 'inputText',
                'value': source
            })
        ]))
  };
});

export default InputView;
