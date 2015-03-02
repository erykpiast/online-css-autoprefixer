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
                            var index = keyword.indexOf(value);

                            if(index === -1) {
                                return -Infinity;
                            }

                            return (10 - index * Math.abs(keyword.length - value.length));
                        }))
                    }))
                    .filter(({ score }) => (score >= 0))
                    .sort((a, b) => b.score - a.score)
                    .map(({ value }) => value)
        );
        var selected$ = Rx.Observable.combineLatest(
            autocompletedTextIntent.get('selectedInput$'),
            autocompletions$,
            (selectedInput, autocompletions) => ({ selectedInput, autocompletions })
        ).scan(0, (position, { selectedInput, autocompletions }) => {
            position = position + selectedInput;

            if(position < 0) {
                position = 0;
            } else if(position > (autocompletions.length - 1)) {
                position = autocompletions.length - 1;
            }

            return position;
        });
        var value$ = Rx.Observable.merge(
            autocompletedTextIntent.get('valueChange$'),
            autocompletedTextIntent.get('selectedChange$')
                .withLatestFrom(
                    selected$,
                    (( enter, position ) => position)
                ).withLatestFrom(
                    autocompletions$,
                    ((position, autocompletions) => autocompletions[position])
                )
        );
        var autocompletionsVisible$ = Rx.Observable.merge(
            autocompletedTextIntent.get('showAutocompletions$')
                .map(() => true),
            autocompletedTextIntent.get('hideAutocompletions$')
                .map(() => false)
        ).startWith(false);

        return { value$, autocompletions$, selected$, autocompletionsVisible$ };
    });

    return autocompletedTextModel;
}

