import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/user/login');
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

  fillEmail(value: string) {
    browser.ignoreSynchronization = true;
    this.getEmailField().sendKeys(value);
  }

  fillPassword(value: string) {
    this.getPasswordField().sendKeys(value);
  }

}
