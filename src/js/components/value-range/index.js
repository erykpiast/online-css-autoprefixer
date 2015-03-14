import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import view from './view';
import intent from './intent';
import model from './model';
import fs from 'fs';

var fs = require('fs');
var stylesheet = fs.readFileSync(__dirname + '/styles.css', 'utf8');

xtag.register('value-range', {
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
                    .distinctUntilChanged(),
                min$: attributes$
                    .filter((ev) => (ev.attrName === 'min'))
                    .map((ev) => parseFloat(ev.attrValue, 10))
                    .filter((min) => !isNaN(min))
                    .distinctUntilChanged(),
                max$: attributes$
                    .filter((ev) => (ev.attrName === 'max'))
                    .map((ev) => parseFloat(ev.attrValue, 10))
                    .filter((max) => !isNaN(max))
                    .distinctUntilChanged(),
                step$: attributes$
                    .filter((ev) => (ev.attrName === 'step'))
                    .map((ev) => parseFloat(ev.attrValue, 10))
                    .filter((step) => !isNaN(step) && (step > 0))
                    .distinctUntilChanged(),
                disabled$: attributes$
                    .filter((ev) => (ev.attrName === 'disabled'))
                    .map((ev) => !!ev.attrValue)
                    .distinctUntilChanged()
            });
            this._outputAttributes = Cycle.createDataFlowSink(function(model) {
                return model.get('value$')
                    .subscribe(function(value) {
                        this.setAttribute('value', value);

                        this.dispatchEvent(new Event('change'));
                    }.bind(this));
            }.bind(this));

            this._intent.inject(this._view);
            this._view.inject(this._model);
            this._model.inject(this._intent, this._inputAttributes);
            Cycle.createRenderer(this.shadowRoot).inject(this._view);

            this._outputAttributes.inject(this._model);

            this.shadowRoot.appendChild(this.stylesheet);
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
            attribute: { string: '' }
        },
        min: {
            set: function(min) {
                this.attributes$.onNext({
                    attrName: 'min',
                    attrValue: min
                });

                return min;
            },
            attribute: { number: 0 }
        },
        max: {
            set: function(max) {
                this.attributes$.onNext({
                    attrName: 'max',
                    attrValue: max
                });

                return max;
            },
            attribute: { number: 100 }
        },
        step: {
            set: function(step) {
                this.attributes$.onNext({
                    attrName: 'step',
                    attrValue: step
                });

                return step;
            },
            attribute: { number: 1 }
        },
        disabled: {
            set: function(disabled) {
                this.attributes$.onNext({
                    attrName: 'disabled',
                    attrValue: disabled
                });

                return disabled;
            },
            attribute: { boolean: false }
        }
    }
});
