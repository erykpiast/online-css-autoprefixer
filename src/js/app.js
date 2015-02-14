import Cycle from 'cyclejs';

import './components';

import InputView from './views/input.view';
import InputIntent from './intents/input.intent';
import InputModel from './models/input.model';

import OutputView from './views/output.view';
import OutputModel from './models/output.model';

import SettingsView from './views/settings.view';
import SettingsIntent from './intents/settings.intent';
import SettingsModel from './models/settings.model';

import RawConfigView from './views/raw-config.view';
import RawConfigIntent from './intents/raw-config.intent';
import RawConfigModel from './models/raw-config.model';


Cycle.createRenderer('.autoprefixer__view-container--input').inject(InputView);
InputIntent.inject(InputView).inject(InputModel).inject(InputIntent);

Cycle.createRenderer('.autoprefixer__view-container--output').inject(OutputView);

OutputModel.inject(InputModel, SettingsModel);
OutputView.inject(OutputModel);

Cycle.createRenderer('.autoprefixer__view-container--settings').inject(SettingsView);
SettingsModel.inject(SettingsIntent, RawConfigIntent);
SettingsView.inject(SettingsModel);
SettingsIntent.inject(SettingsView);

Cycle.createRenderer('.autoprefixer__view-container--raw-config').inject(RawConfigView);
RawConfigModel.inject(RawConfigIntent, SettingsIntent);
RawConfigView.inject(RawConfigModel);
RawConfigIntent.inject(RawConfigView);
