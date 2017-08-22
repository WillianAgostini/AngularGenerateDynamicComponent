import { TestComponentResolverPage } from './app.po';

describe('test-component-resolver App', () => {
  let page: TestComponentResolverPage;

  beforeEach(() => {
    page = new TestComponentResolverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
