import Cycle from 'cyclejs';
import { h } from 'cyclejs';


export default function createTestComponenttView() {
    var TestComponenttView = Cycle.createView(function (testComponenttModel) {
        return {
            vtree$: testComponenttModel.get('test$').map((test) => h('span', { }, test))
        };
    });

    return TestComponenttView;
}
