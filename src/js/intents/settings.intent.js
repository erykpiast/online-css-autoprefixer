import Cycle from 'cyclejs';
import assign from 'lodash.assign';

import { stringify } from '../services/settings-parser';


var SettingsIntent = Cycle.createIntent(function (settingsView) {
    return {
        settingsChange$: settingsView.get('settingsChange$')
            .map(function(ev) {
                var value = JSON.parse(ev.target.value);

                switch(ev.target.name) {
                    case 'direct':
                        value = Object.keys(value).map((browserName) =>
                            value[browserName].map((version) =>
                                `${browserName} ${version}`
                            )
                        ).reduce((current, prev) =>
                            prev.concat(current), [ ]
                        );
                    break;
                    default:
                }

                return {
                    [ev.target.name]: value
                };
            })
            .scan((acc, value) => assign(acc, value))
            .map(stringify)
    };
});

export default SettingsIntent;