import { browser, by, element } from 'protractor';

export class UserPage {
  navigateTo() {
    return browser.get('/user/login');
  }

  nagivateToUserPage() {
    return browser.get('/user/my-page');
  }

  getEmailField() {
    return element(by.css('#emailInp'));
  }

  getPasswordField() {
    return element(by.css('#passInp'));
  }

  getLoginButton() {
    return element(by.css('.btn-primary'));
  }

  getUserPageLink() {
      return element(by.css('#user-page'));
  }

  getUserPageTitle() {
      return element(by.tagName('h1'));
  }

  fillEmail(value: string) {
    browser.ignoreSynchronization = true;
    this.getEmailField().sendKeys(value);
  }

  fillPassword(value: string) {
    this.getPasswordField().sendKeys(value);
  }

}
