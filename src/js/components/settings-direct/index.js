import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import View from './view';
import Intent from './intent';
import Model from './model';


xtag.register('oca-settings-direct', {
    lifecycle: {
        created: function() {
            this._model = Model();
            this._view = View();
            this._intent = Intent();
            var attributes$ = this.attributes$ = new Rx.Subject();

            this._attributes = Cycle.createDataFlowSource({
                selectedBrowsers$: attributes$
                    .filter((ev) => (ev.attrName === 'selectedBrowsers'))
                    .tap(console.log.bind(console, 'first side'))
            });


            var browsers$ = this._browsers$ = new Rx.Subject();

            this._browsers = Cycle.createDataFlowSource({
                browsers$: browsers$
                    .tap(console.log.bind(console, 'browsers'))
            });

            this._intent.inject(this._view, this._attributes);
            this._view.inject(this._browsers);
            this._model.inject(this._intent);
            Cycle.createRenderer(this).inject(this._view);
        },
        inserted: function() {
            console.log('inserted');
        }
    },
    accessors: {
        selectedBrowsers: {
            set: function(value) {
                this.attributes$.onNext({
                    attrName: 'selectedBrowsers',
                    attrValue: value
                });

                this._browsers$.onNext({
                    'chrome': {
                        name: 'Guugle Krom',
                        versions: [{
                            name: '31',
                            selected: true
                        }, {
                            name: '30',
                            selected: false
                        }]
                    }
                })

                return value;
            },
            attribute: { string: '{}' }
        }
    }
});
