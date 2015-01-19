import Cycle from 'cyclejs';
import Polymer from 'Polymer';

import View from './view';
import Intent from './intent';
import Model from './model';


Polymer('oca-settings-direct', {
    created: function() {
        this.model = model();
        this.view = view();
        this.intent = intent();

        Cycle.createRenderer('.autoprefixer__view-container--input').inject(this.view);
        this.intent.inject(this.view).inject(this.model).inject(this.intent);
    }
});

var el = document.createElement('div');
el.innerHTML = '<polymer-element name="oca-settings-direct"></polymer-element>';

document.body.appendChild(el);