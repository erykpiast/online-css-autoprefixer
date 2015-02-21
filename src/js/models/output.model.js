import Cycle from 'cyclejs';
import autoprefixer from 'autoprefixer-core';

var OutputModel = Cycle.createModel(function (inputModel, settingsModel) {
    return {
        prefixed$: Cycle.Rx.Observable.combineLatest(
                inputModel.get('source$'),
                settingsModel.get('settings$')
                    .map(({ rawConfig }) =>
                        autoprefixer({
                            rawConfig,
                            cascade: true
                        })
                    )
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
                (source, processor) => processor.process(source, { safe: true }).css
            )
    };
});

export default OutputModel;
