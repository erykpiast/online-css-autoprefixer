import Cycle from 'cyclejs';

var h = Cycle.h;

var RawConfigView = Cycle.createView(function (model) {
    return {
        vtree$: model.get('rawConfig$').map(rawConfig => h('form.autoprefixer__view.autoprefixer__view--raw-config.autoprefixer__raw-config', {}, [
            h('fieldset', {}, [
                h('legend', {}, 'Autoprefixer config'),
                h('div.autoprefixer__raw-config__wrapper', {}, [
                    h('input[type="text"].autoprefixer__raw-config__input', {
                        'value': rawConfig,
                        'oninput': 'rawConfigChange$'
                    })
                ])
            ])
        ]))
  };
});

export default RawConfigView;
