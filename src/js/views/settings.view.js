import Cycle from 'cyclejs';

import settingsDirectView from './settings-direct.view';

var h = Cycle.h;

var SettingsView = Cycle.createView(function (model) {
    return {
        vtree$: model.get('settings$').map(settings => h('section.autoprefixer__view.autoprefixer__view--settings.autoprefixer__settings', {}, [
            h('header', {}, [
                h('h2', {}, 'Browsers you want to support')
            ]),
            h('ul', {}, Object.keys(settings).map((browserName) => h('li', { }, [
                h('span', {}, browserName),
                ': ',
                h('span', {}, settings[browserName].join(', '))
            ]))),
            settingsDirectView(settings)
        ]))
  };
});

export default SettingsView;
