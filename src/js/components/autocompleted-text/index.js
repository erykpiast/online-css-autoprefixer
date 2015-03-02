import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import View from './view';
import Intent from './intent';
import Model from './model';
import fs from 'fs';

var fs = require('fs');
var stylesheet = fs.readFileSync(__dirname + '/styles.css', 'utf8');


xtag.register('autocompleted-text', {
    lifecycle: {
        created: function() {
            this.shadowRoot = this.createShadowRoot();
            this.stylesheet = document.createElement('style');
            this.stylesheet.innerHTML = stylesheet;

            var attributes$ = this.attributes$ = new Rx.Subject();

            this._model = Model();
            this._view = View();
            this._intent = Intent();
            this._inputAttributes = Cycle.createDataFlowSource({
                datalist$: attributes$
                    .filter((ev) => (ev.attrName === 'datalist'))
                    .map((ev) => JSON.parse(ev.attrValue))
                    .distinctUntilChanged(),
                value$: attributes$
                    .filter((ev) => (ev.attrName === 'value'))
                    .map((ev) => ev.attrValue)
                    // to prevent loops when changing attr value from inside of the component
                    // no keySelector needed, value is stringified JSON
                    .distinctUntilChanged()
            });
            this._outputAttributes = Cycle.createDataFlowSink(function(intent) {
                return intent.get('valueChange$')
                    .subscribe(function(value) {
                        this.setAttribute('value', value);

                        this.dispatchEvent(new Event('change'));
                    }.bind(this));
            }.bind(this));

            this._intent.inject(this._view, this._inputAttributes);
            this._view.inject(this._model);
            this._model.inject(this._intent, this._inputAttributes);
            Cycle.createRenderer(this.shadowRoot).inject(this._view);

            this._outputAttributes.inject(this._intent);

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
            attribute: { string: '' }
        },
        datalist: {
            set: function(value) {
                this.attributes$.onNext({
                    attrName: 'datalist',
                    attrValue: value
                });

                return value;
            },
            attribute: { string: '[[]]' }
        }
    }
});