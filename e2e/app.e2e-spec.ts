import { Voltige2BackendPage } from './app.po';

describe('voltige2-backend App', () => {
  let page: Voltige2BackendPage;

  beforeEach(() => {
    page = new Voltige2BackendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
