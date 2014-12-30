import Cycle from 'cyclejs';

import InputView from './views/input.view';
import InputIntent from './intents/input.intent';
import InputModel from './models/input.model';

import OutputView from './views/output.view';
import OutputModel from './models/output.model';


Cycle.createRenderer('.autoprefixer__view-container--input').inject(InputView);
Cycle.circularInject(InputModel, InputView, InputIntent);

Cycle.createRenderer('.autoprefixer__view-container--output').inject(OutputView);
OutputModel.inject(InputIntent);
OutputView.inject(OutputModel);
