import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo() {
    return browser.get('/user/register');
  }

  getEmailField() {
    return element(by.css('#emailInp'));
  }

  getPasswordField() {
    return element(by.css('#passInp'));
  }

  getConfPasswordField() {
    return element(by.css('#confPassInp'));
  }

  getRegisterButton() {
    return element(by.css('.btn-primary'));
  }

  fillEmail(value: string) {
    browser.ignoreSynchronization = true;
    this.getEmailField().sendKeys(value);
  }

  fillPassword(value: string) {
    this.getPasswordField().sendKeys(value);
  }

  fillConfPassword(value: string) {
    this.getConfPasswordField().sendKeys(value);
  }

}
