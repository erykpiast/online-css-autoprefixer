import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer';

import storage from '../services/storage';


var processor = autoprefixer({ browsers: ['> 1%', 'last 2 version'], cascade: true });

var OutputModel = Cycle.createModel(function (intent) {
    return {
        prefixed$: intent.get('sourceChange$')
            .startWith(storage.read('input'))
            .map(source => processor.process(source, { safe: true }).css)
    };
});

export default OutputModel;