import Cycle from 'cyclejs';
import mapValues from 'map-values';
import assign from 'lodash.assign';
import pick from 'lodash.pick';


function chain(obj) {
    return {
        tap: function(predicate, ...args) {
            predicate(obj, ...args);

            return this;
        },
        thru: function(predicate, ...args) {
            obj = predicate(obj, ...args);

            return this;
        },
        value: function() {
            return obj;
        }
    };
}


export default function createsettingsPopularityIntent() {
    var settingsPopularityIntent = Cycle.createIntent(function (settingsPopularityView, attributes) {
        return {
            valueChange$: Cycle.Rx.Observable.combineLatest(
                settingsPopularityView.get('valueChange$')
                    .map(function(ev) {
                        return {
                            name: ev.target.name,
                            versions: JSON.parse(ev.target.value)
                                .filter((version) => version.checked)
                                .map((version) => version.value)
                        };
                    })
                    .filter((value) => !!value)
                    .startWith({ }),
                attributes.get('selectedBrowsers$')
                    .map((json) => JSON.parse(json)),
                (modifiedBrowser, attributeValue) =>
                    chain({ [modifiedBrowser.name]: [] })
                        .thru(assign, attributeValue)
                        .thru(mapValues, (browserVersions, browserName) =>
                            (browserName === modifiedBrowser.name) ?
                                modifiedBrowser.versions :
                                browserVersions
                        )
                        .thru(pick, (value) => !!value.length)
                        .value()
            )
        };
    });

    return settingsPopularityIntent;
}
