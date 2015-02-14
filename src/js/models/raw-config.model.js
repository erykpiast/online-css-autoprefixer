import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';


var RawConfigModel = Cycle.createModel(function (rawConfigIntent, settingsIntent) {
    return {
        rawConfig$: Rx.Observable.merge(
            settingsIntent.get('settingsChange$'),
            rawConfigIntent.get('rawConfigChange$')
        )
        .distinctUntilChanged()
    };
});

export default RawConfigModel;