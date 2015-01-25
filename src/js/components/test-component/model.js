import Cycle from 'cyclejs';
// import { Rx } from 'cyclejs';


export default function createTestComponentModel() {
    var TestComponentModel = Cycle.createModel(function (testComponentIntent) {
        return {
            test$: testComponentIntent.get('test$')
        };
    });

    return TestComponentModel;
}

