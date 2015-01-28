import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';
import { EventEmitter } from 'events';

import View from './view';
import Intent from './intent';
import Model from './model';


xtag.register('multi-checkbox', {
    lifecycle: {
        created: function() {
            var attributes$ = this.attributes$ = new Rx.Subject();

            this._model = Model();
            this._view = View();
            this._intent = Intent();
            this._attributes = Cycle.createDataFlowSource({
                value$: attributes$
                    .filter((ev) => (ev.attrName === 'value'))
                    .map((ev) => ev.attrValue)
            });

            this._intent.inject(this._view, this._attributes);
            this._view.inject(this._model);
            this._model.inject(this._intent);
            Cycle.createRenderer(this).inject(this._view);
        },
        inserted: function() {
            console.log('inserted');
        }
    },
    accessors: {
        value: {
            set: function(value) {
                this.attributes$.onNext({
                    attrName: 'value',
                    attrValue: value
                });

                return value;
            },
            attribute: { string: '{}' }
        }
    }
});
