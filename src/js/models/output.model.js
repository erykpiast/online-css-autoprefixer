import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer';
import Rx from 'rx';

import storage from '../services/storage';


var OutputModel = Cycle.createModel(function (inputIntent, rawConfigModel) {
    var processor;

    return {
        prefixed$: Rx.Observable.combineLatest(
                inputIntent.get('sourceChange$')
                    .startWith(storage.read('input')),
                rawConfigModel.get('rawConfig$')
                    .startWith(storage.read('settings')),
                (source, config) => ({
                    source: source,
                    config: config
                })
            )
            .map(function(input) {
                try {
                    var newProcessor = autoprefixer({
                        browsers: input.config.split(',').map((req) => req.trim()),
                        cascade: true
                    });

                    processor = newProcessor;
                } catch(err) {

                }

                return processor.process(input.source, { safe: true }).css;
            })
    };
});

export default OutputModel;