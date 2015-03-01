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
        ).tap(console.log.bind(console, 'autocompletions'));

        return {
            value$: autocompletedTextIntent.get('valueChange$'),
            autocompletions$: autocompletions$,
            selected$: Rx.Observable.combineLatest(
                autocompletedTextIntent.get('selectedChange$'),
                autocompletions$,
                (selectedChange, autocompletions) => ({ selectedChange, autocompletions })
            ).scan(0, (position, { selectedChange, autocompletions }) => {
                position = position + selectedChange;
                
                if(position < 0) {
                    position = 0;
                } else if(position > (autocompletions.length - 1)) {
                    position = autocompletions.length - 1;
                }
                
                return position;
            })
            .tap(console.log.bind(console, 'position'))
        };
    });

    return autocompletedTextModel;
}

