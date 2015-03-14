import Cycle from 'cyclejs';

export default function createsettingsPopularityIntent() {
    var settingsPopularityIntent = Cycle.createIntent(function (settingsPopularityView, inputAttributes) {
        return {
            baseChange$: inputAttributes.get('selectedBrowsers$'),
            countryNameChange$: settingsPopularityView.get('countryNameChange$')
                .map(({ target }) => ({
                    index: target.index,
                    country: target.value
                })),
            countryPopularityChange$: settingsPopularityView.get('countryPopularityChange$')
                .map(({ target }) => ({
                    index: target.index,
                    popularity: parseFloat(target.value, 10)
                })),
            globalPopularityChange$: settingsPopularityView.get('globalPopularityChange$')
                .map(({ target }) => parseFloat(target.value, 10)),
        };
    });

    return settingsPopularityIntent;
}
