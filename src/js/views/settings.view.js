import Cycle from 'cyclejs';
import { h } from 'cyclejs';


var SettingsView = Cycle.createView(function (model) {
    return {
        vtree$: model.get('settings$').map(({ settings, browsers }) =>
            h('section.autoprefixer__view.autoprefixer__view--settings.autoprefixer__settings', {}, [
                h('header', {}, [
                    h('h2', {}, 'Browsers you want to support')
                ]),
                h('ul', {}, Object.keys(browsers).map((browserName) => h('li', { }, [
                    h('span', {}, browserName),
                    ': ',
                    h('span', {}, browsers[browserName].join(', '))
                ]))),
                h('oca-settings-direct', {
                    name: 'direct',
                    value: JSON.stringify(settings.direct),
                    onchange: 'settingsChange$'
                }, [])
            ])
        )
  };
});

export default SettingsView;
