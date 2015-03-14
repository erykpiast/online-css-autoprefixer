import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import view from './view';
import intent from './intent';
import model from './model';


xtag.register('oca-settings-popularity', {
    lifecycle: {
        created: function() {
            var attributes$ = this.attributes$ = new Rx.Subject();

            this._model = model();
            this._view = view();
            this._intent = intent();
            this._inputAttributes = Cycle.createDataFlowSource({
                selectedBrowsers$: attributes$
                    .filter((ev) => (ev.attrName === 'value'))
                    .map((ev) => ev.attrValue)
                    // to prevent loops when changing attr value from inside of the component
                    // no keySelector needed, value is stringified JSON
                    .distinctUntilChanged()
                    .map((json) => JSON.parse(json))
            });

            this._outputAttributes = Cycle.createDataFlowSink(function(model) {
                return model.get('value$')
                    .skip(1)
                    .distinctUntilChanged()
                    .subscribe((value) => {
                        this.setAttribute('value', JSON.stringify(value));

                        console.log(value);

                        this.dispatchEvent(new Event('change'));
                    });
            }.bind(this));

            this._intent.inject(this._view, this._inputAttributes);
            this._view.inject(this._model);
            this._model.inject(this._intent);
            Cycle.createRenderer(this).inject(this._view);

            this._outputAttributes.inject(this._model);
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
