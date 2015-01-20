import Cycle from 'cyclejs';
import Polymer from 'polymer';

import View from './view';
import Intent from './intent';
import Model from './model';


Polymer('oca-settings-direct', {
    created: function() {
        this.model = Model();
        this.view = View();
        this.intent = Intent();

        console.log('created', this.shadowRoot);

        this.intent.inject(this.view).inject(this.model).inject(this.intent);
    },
    ready: function() {
        Cycle.createRenderer(this.shadowRoot).inject(this.view);
    }
});

var el = document.createElement('div');
el.innerHTML = '<polymer-element name="oca-settings-direct"><template></template></polymer-element>';

document.body.appendChild(el);
