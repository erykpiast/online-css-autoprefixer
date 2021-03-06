import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import view from './view';
import intent from './intent';
import model from './model';

var fs = require('fs');
var stylesheet = fs.readFileSync(__dirname + '/styles.css', 'utf8');


xtag.register('multi-checkbox', {
    lifecycle: {
        created: function() {
            this.shadowRoot = this.createShadowRoot();
            this.stylesheet = document.createElement('style');
            this.stylesheet.innerHTML = stylesheet;

            var attributes$ = this.attributes$ = new Rx.Subject();

            this._model = model();
            this._view = view();
            this._intent = intent();
            this._inputAttributes = Cycle.createDataFlowSource({
                value$: attributes$
                    .filter((ev) => (ev.attrName === 'value'))
                    .map((ev) => ev.attrValue)
                    // to prevent loops when changing attr value from inside of the component
                    // no keySelector needed, value is stringified JSON
                    .distinctUntilChanged()
            });
            this._outputAttributes = Cycle.createDataFlowSink(function(model) {
                return model.get('value$')
                    .subscribe(function(value) {
                        this.setAttribute('value', JSON.stringify(value));

                        this.dispatchEvent(new Event('change'));
                    }.bind(this));
            }.bind(this));

            this._intent.inject(this._view, this._inputAttributes);
            this._view.inject(this._model);
            this._model.inject(this._intent);
            Cycle.createRenderer(this.shadowRoot).inject(this._view);

            this._outputAttributes.inject(this._model);

            this.shadowRoot.appendChild(this.stylesheet);
        },
        inserted: function() {
            
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
