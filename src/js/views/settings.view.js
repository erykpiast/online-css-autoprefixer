import Cycle from 'cyclejs';

var h = Cycle.h;

var SettingsView = Cycle.createView(function (model) {
    return {
        vtree$: model.get('settings$').map(settings => h('form.autoprefixer__view.autoprefixer__view--settings.autoprefixer__settings', {}, [
            h('fieldset', {}, [
                h('legend', {}, 'Browsers you want to support'),
                h('ul', {}, Object.keys(settings).map((browserName) => h('li', { }, [
                    h('span', {}, browserName),
                    ': ',
                    h('span', {}, settings[browserName].join(', '))
                ])))
            ])
        ]))
  };
});

export default SettingsView;
