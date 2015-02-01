import Cycle from 'cyclejs';
import { h } from 'cyclejs';


export default function createMultiCheckboxView() {
    var MultiCheckboxView = Cycle.createView(function (multiCheckboxModel) {
        return {
            vtree$: multiCheckboxModel.get('value$').map((value) =>
                h('ul', { },
                    value.map((option, index) => h('li', { }, [
                        h('input', {
                            type: 'checkbox',
                            checked: option.checked,
                            value: option.value,
                            id: `multi-checkbox__${index}`,
                            onchange: 'change$',
                        }),
                        h('label', {
                            htmlFor: `multi-checkbox__${index}`
                        }, option.label)
                    ]))
                )
            )
        };
    });

    return MultiCheckboxView;
}
