import Cycle from 'cyclejs';

var h = Cycle.h;

var SettingsView = Cycle.createView([ 'settings' ], function (model) {
    return {
        events: [ 'settingChange' ],
        vtree$: model.settings.map(settings => h('div.autoprefixer__view.autoprefixer__view--settings.autoprefixer__settings', {}, [
            h('span', {}, JSON.stringify(settings))
        ]))
  };
});

export default SettingsView;
