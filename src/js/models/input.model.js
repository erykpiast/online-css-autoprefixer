import Cycle from 'cyclejs';

var InputModel = Cycle.createModel([ 'sourceChange' ], function (intent) {
    return {
        source: intent.sourceChange.startWith('transform: translateX( -100% );\nbackground: linear-gradient(to top, #000, #FFF);')
    };
});

export default InputModel;