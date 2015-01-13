import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer';
import Rx from 'rx';

import storage from '../services/storage';


var OutputModel = Cycle.createModel(function (inputIntent, rawConfigModel) {
    var processor;
    var rawConfig = rawConfigModel.get('rawConfig$').startWith('> 1%, last 2 versions, Firefox ESR, Opera 12.1');
    rawConfig.subscribe(function(config) {
        var newProcessor = autoprefixer({
            browsers: config.split(',').map((req) => req.trim()),
            cascade: true
        });

        try {
            newProcessor.process('color: #FFF', { safe: true });

            processor = newProcessor;
        } catch(err) {

        }
    });

    return {
        prefixed$: Rx.Observable.combineLatest(
                inputIntent.get('sourceChange$')
                    .startWith(storage.read('input')),
                rawConfig,
                (source, config) => ({
                    source: source,
                    config: config
                })
            )
            .map((input) => processor.process(input.source, { safe: true }).css)
    };
});

export default OutputModel;