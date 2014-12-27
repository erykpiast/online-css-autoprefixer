import Cycle from 'cyclejs';
import InputView from './views/input.view';
import InputIntent from './intents/input.intent';
import InputModel from './models/input.model';


Cycle.createRenderer('#app').inject(InputView);

InputIntent.inject(InputView);
InputView.inject(InputModel);
InputModel.inject(InputIntent, {
    source: ''
});