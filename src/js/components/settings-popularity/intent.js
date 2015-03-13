import Cycle from 'cyclejs';

export default function createsettingsPopularityIntent() {
    var settingsPopularityIntent = Cycle.createIntent(function (settingsPopularityView, inputAttributes) {
        return {
            baseChange$: inputAttributes.get('selectedBrowsers$'),
            singleChange$: settingsPopularityView.get('valueChange$')
                .map(({ target }) => ({
                    index: target.index,
                    country: target.value,
                    popularity: 0
                }))
        };
    });

    return settingsPopularityIntent;
}
