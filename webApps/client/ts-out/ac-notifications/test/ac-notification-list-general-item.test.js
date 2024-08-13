import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import '../ac-notification-list-general-item.js';
import { YpTestHelpers } from '../../common/test/setup-app.js';
describe('AcNotificationListGenaralItem', () => {
    let element;
    let fetchMock;
    before(async () => {
        fetchMock = YpTestHelpers.getFetchMock();
        await YpTestHelpers.setupApp();
    });
    beforeEach(async () => {
        const notification = {
            id: 1,
            type: 'ALex',
            domain_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
            AcActivities: [{
                    type: 'LEXI',
                    created_at: new Date().toISOString(),
                    domain_id: 2,
                    Post: YpTestHelpers.getPost(),
                    User: YpTestHelpers.getUser(),
                }]
        };
        element = await fixture(html `
        ${YpTestHelpers.renderCommonHeader()}
        <ac-notification-list-general-item
          .notification="${notification}"
        ></ac-notification-list-general-item>
      `);
        await aTimeout(100);
    });
    it('passes the a11y audit', async () => {
        debugger;
        await expect(element).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=ac-notification-list-general-item.test.js.map