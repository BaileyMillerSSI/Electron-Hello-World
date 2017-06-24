import { AngularProfilePagePage } from './app.po';

describe('angular-profile-page App', () => {
  let page: AngularProfilePagePage;

  beforeEach(() => {
    page = new AngularProfilePagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
