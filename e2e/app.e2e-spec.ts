import { AnteoPage } from './app.po';

describe('anteo App', function() {
  let page: AnteoPage;

  beforeEach(() => {
    page = new AnteoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
