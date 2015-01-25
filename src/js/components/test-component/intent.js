import Cycle from 'cyclejs';

export default function createTestComponentIntent() {
    var TestComponentIntent = Cycle.createIntent(function (testComponentView) {
        return {
            test$: testComponentView.get('test$')
        };
    });

    return TestComponentIntent;
}
