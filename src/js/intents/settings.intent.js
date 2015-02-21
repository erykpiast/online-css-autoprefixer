import Cycle from 'cyclejs';
import assign from 'lodash.assign';

import { stringify } from '../services/settings-parser';


var SettingsIntent = Cycle.createIntent(function (settingsView) {
    return {
        settingsChange$: settingsView.get('settingsChange$')
            .map(function({ target }) {
                return {
                    [target.name]: JSON.parse(target.value)
                };
            })
            .scan((acc, value) => assign(acc, value))
            .map(stringify)
    };
});

export default SettingsIntent;