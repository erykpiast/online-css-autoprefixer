import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';
import xtag from 'x-tag';

import View from './view';
import Intent from './intent';
import Model from './model';


xtag.register('oca-test-component', {
    lifecycle: {
        created: function() {
            this._model = Model();
            this._view = View();
            this._intent = Intent();

            var testSubject = new Rx.Subject();
            var testSource = Cycle.createDataFlowSource({
                test$: testSubject
            });

            this._intent.inject(this._view);
            this._view.inject(this._model);
            this._model.inject(testSubject);
            Cycle.createRenderer(this).inject(this._view);

            testSubject.onNext('dupa dupa 2');
        },
        inserted: function() {
            console.log('inserted');
        }
    },
    accessors: {
        testAttribute: {
            set: function() {

            },
            attribute: { string: '' }
        }
    }
});
