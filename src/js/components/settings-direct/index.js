import Cycle from 'cyclejs';
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

            this._intent.inject(this._view).inject(this._model).inject(this._intent);
            Cycle.createRenderer(this).inject(this._view);
        }
    },
    accessors: {
        selectedBrowsers: {
            set: function(value) {
                console.log(JSON.parse(value));
            },
            attribute: { string: '{}' }
        }
    }
});