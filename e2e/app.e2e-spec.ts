import { AngularfireAppPage } from './app.po';

describe('angularfire-app App', () => {
  let page: AngularfireAppPage;

  beforeEach(() => {
    page = new AngularfireAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
