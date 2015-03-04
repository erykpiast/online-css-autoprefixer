import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';


export default function createsettingsPopularityIntent() {
    var settingsPopularityIntent = Cycle.createIntent(function (settingsPopularityView, inputAttributes) {
        return {
            valueChange$: Rx.Observable.merge(
                settingsPopularityView.get('change$')
                    .map(({ target }) => target.value),
                inputAttributes.get('selectedBrowsers$')
            )
        };
    });

    return settingsPopularityIntent;
}
