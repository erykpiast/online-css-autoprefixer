import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';
import { EventEmitter } from 'events';

import View from './view';
import Intent from './intent';
import Model from './model';


xtag.register('oca-settings-direct', {
    lifecycle: {
        created: function() {
            this._model = Model();
            this._view = View();
            this._intent = Intent();
            this._privateEventBus = new EventEmitter();

            this._attributes = Cycle.createDataFlowSource({
                selectedBrowsers$: Rx.Observable.fromEvent(this._privateEventBus, 'attrchange')
                    .filter((ev) => (ev.attrName === 'selectedBrowsers'))
                    .tap(console.log.bind(console, 'first side'))
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
        selectedBrowsers: {
            set: function(value) {
                setTimeout(function() {
                    this._privateEventBus.emit('attrchange', {
                        attrName: 'selectedBrowsers',
                        attrValue: value
                    });
                }.bind(this), 500);
                

                return value;
            },
            attribute: { string: '{}' }
        }
    }
});
