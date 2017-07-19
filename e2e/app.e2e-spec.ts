import { AccountingAppPage } from './app.po';

describe('accounting-app App', () => {
  let page: AccountingAppPage;

  beforeEach(() => {
    page = new AccountingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
