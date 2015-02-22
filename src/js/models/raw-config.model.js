import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';


var RawConfigModel = Cycle.createModel(function (rawConfigIntent, settingsModel) {
    return {
        rawConfig$: Rx.Observable.merge(
            settingsModel.get('settings$')
                .map(({ rawConfig }) => rawConfig),
            rawConfigIntent.get('rawConfigChange$')
        )
        .distinctUntilChanged()
    };
});

export default RawConfigModel;