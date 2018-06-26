import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  // noinspection JSMethodCanBeStatic
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
