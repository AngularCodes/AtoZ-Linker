import { AtoZPage } from './app.po';

describe('ato-z App', function() {
  let page: AtoZPage;

  beforeEach(() => {
    page = new AtoZPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
