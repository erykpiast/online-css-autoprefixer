import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

import { strinigify } from '../services/settings-parser';


var RawConfigModel = Cycle.createModel(function (rawConfigIntent, settingsIntent) {
    return {
        rawConfig$: Rx.Observable.merge(
            settingsIntent.get('settingsChange$')
                .tap(function(argument) {
                    console.log(argument);
                })
                .map(strinigify)
                .tap(function(argument) {
                    console.log(argument);
                }),
            rawConfigIntent.get('rawConfigChange$')
        )
        .distinctUntilChanged()
    };
});

export default RawConfigModel;