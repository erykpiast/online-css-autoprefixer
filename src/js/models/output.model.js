import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer-core';

var OutputModel = Cycle.createModel(function (inputModel, settingsModel) {
    return {
        prefixed$: Cycle.Rx.Observable.combineLatest(
                inputModel.get('source$'),
                settingsModel.get('settings$')
                    .map((settings) => autoprefixer({
                        // map browsers from { 'firefox': [ '37', '36' ], 'ie': [ '9' ] } to
                        // [ 'firefox 37', 'firefox 36', 'ie 9' ]
                        browsers: Object.keys(settings).map((browserName) =>
                            settings[browserName].map((browserVersion) =>
                                [ browserName, browserVersion ].join(' ')
                            )
                        ).reduce((prev, current) => prev.concat(current), []),
                        cascade: true
                    }))
                    .filter(function(processor) {
                        try {
                            // check if settings are understandable by autoprefixer
                            processor.process('color: #FFF', { safe: true });

                            return true;
                        } catch(err) {
                            console.log(err);

                            return false;
                        }
                    }),
                (source, processor) => [ source, processor ]
            )
            .map(([ source, processor ]) => processor.process(source, { safe: true }).css)
    };
});

export default OutputModel;
