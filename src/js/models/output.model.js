import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer';

var processor = autoprefixer({ browsers: ['> 1%', 'last 2 version'], cascade: true });

var OutputModel = Cycle.createModel([ 'sourceChange' ], function (intent) {
    return {
        prefixed: intent.sourceChange.startWith('transform: translateX( -100% );\nbackground: linear-gradient(to top, #000, #FFF);').map(source => processor.process(source, { safe: true }).css)
    };
});

export default OutputModel;