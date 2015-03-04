import Cycle from 'cyclejs';
import { Rx } from 'cyclejs';

export default function createAutocompletedTextModel() {
    var autocompletedTextModel = Cycle.createModel(function (autocompletedTextIntent, inputAttributes) {
        var autocompletions$ = Rx.Observable.combineLatest(
            autocompletedTextIntent.get('valueChange$'),
            inputAttributes.get('datalist$'),
            (value, datalist) =>
                datalist
                    .map((keywords) => ({
                        value: keywords[0],
                        score: Math.max.apply(Math, keywords.map(function(keyword, index) {
                            var index = keyword.toLowerCase().indexOf(value.toLowerCase());

                            if(index === -1) {
                                return -Infinity;
                            }

                            return (100 - index * Math.abs(keyword.length - value.length));
                        }))
                    }))
                    .filter(({ score }) => (score >= 0))
                    .sort((a, b) => b.score - a.score)
                    .map(({ value }) => value)
        );
        var selectedAutocompletion$ = Rx.Observable.combineLatest(
            Rx.Observable.merge(
                Rx.Observable.merge( // reset position on text and when autocompletions list hides
                    autocompletedTextIntent.get('valueChange$'),
                    autocompletedTextIntent.get('hideAutocompletions$')
                )
                    .map(() => 0)
                    .delay(1), // reset after fetching value from autocompletions
                autocompletedTextIntent.get('selectedAutocompletionInput$')
            ),
            autocompletions$,
            (positionModifier, autocompletions) => ({ positionModifier, autocompletions })
        ).scan(0, (position, { positionModifier, autocompletions }) => {
            if(positionModifier === 0) {
                return 0;
            }
            
            position = position + positionModifier;

            if(position < 0) {
                position = 0;
            } else if(position > (autocompletions.length - 1)) {
                position = autocompletions.length - 1;
            }

            return position;
        }).distinctUntilChanged();
        var textFieldValue$ = Rx.Observable.merge(
            autocompletedTextIntent.get('valueChange$'),
            autocompletedTextIntent.get('selectedAutocompletionChange$')
                .withLatestFrom(
                    selectedAutocompletion$,
                    (( enter, position ) => position)
                )
                .withLatestFrom(
                    autocompletions$,
                    ((position, autocompletions) => autocompletions[position])
                )
        ).distinctUntilChanged();
        var autocompletionsVisible$ = Rx.Observable.merge(
            autocompletions$
                .filter((autocompletions) => autocompletions.length === 0)
                .map(() => false),
            autocompletedTextIntent.get('showAutocompletions$')
                .map(() => true),
            autocompletedTextIntent.get('hideAutocompletions$')
                .map(() => false)
        )
        .distinctUntilChanged()
        .startWith(false);
        var value$ = autocompletedTextIntent.get('selectedAutocompletionChange$')
            .withLatestFrom(
                textFieldValue$,
                (selected, value) => value
            )
            .filter((value) => 'undefined' !== typeof value)
            .distinctUntilChanged();
        var invalidValue$ = autocompletions$
            .map((autocompletions) =>
                autocompletions.length === 0
            )
            .distinctUntilChanged()
            .startWith(false)

        return { value$, textFieldValue$, autocompletions$, selectedAutocompletion$, autocompletionsVisible$, invalidValue$ };
    });

    return autocompletedTextModel;
}

