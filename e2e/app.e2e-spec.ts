import { ProjectFBPage } from './app.po';

describe('project-fb App', () => {
  let page: ProjectFBPage;

  beforeEach(() => {
    page = new ProjectFBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
