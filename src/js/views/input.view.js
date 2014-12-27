import Cycle from 'cyclejs';
import { h } from 'cyclejs';

export var InputView = Cycle.createView([ 'source' ], function (model) {
    return {
        events: [ 'sourceChange' ],
        vtree$: h('div', {}, [
            h('label[for="input-css"]', 'Your CSS:'),
            h('textarea[id="input-css"]', {
                'ev-input': 'sourceChange',
                'value': model.source
            })
        ])
  };
});
