import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import View from './view';
import Intent from './intent';
import Model from './model';


xtag.register('oca-settings-direct', {
    lifecycle: {
        created: function() {
            var attributes$ = this.attributes$ = new Rx.Subject();

            this._model = Model();
            this._view = View();
            this._intent = Intent();
            this._inputAttributes = Cycle.createDataFlowSource({
                selectedBrowsers$: attributes$
                    .filter((ev) => (ev.attrName === 'value'))
                    .map((ev) => ev.attrValue)
                    // to prevent loops when changing attr value from inside of the component
                    // no keySelector needed, value is stringified JSON
                    .distinctUntilChanged()
            });

            this._outputAttributes = Cycle.createDataFlowSink(function(intent) {
                return intent.get('selectedBrowsersChange$')
                    .map((value) => JSON.stringify(value))
                    .distinctUntilChanged()
                    .subscribe(function(value) {
                        this.setAttribute('value', value);

                        this.dispatchEvent(new Event('change'));
                    }.bind(this));
            }.bind(this));

            this._intent.inject(this._view, this._inputAttributes);
            this._view.inject(this._model);
            this._model.inject(this._intent);
            Cycle.createRenderer(this).inject(this._view);

            this._outputAttributes.inject(this._intent);
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
