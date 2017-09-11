import { browser } from 'protractor';
import { LoginPage } from './login.po';
import { protractor } from 'protractor/built/ptor';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('Should load the page with all fields', () => {
    page.navigateTo();
    expect(page.getEmailField()).toBeTruthy();
    expect(page.getPasswordField()).toBeTruthy();
  });

  it('Should enable the login button when email and password are provided', () => {
    page.navigateTo();

    page.fillEmail('kalin@test.com');
    page.fillPassword('123456');

    expect(page.getLoginButton().isEnabled()).toBeTruthy();
  });

  it('Should login successfully and redirect to homepage when valid credentials are provided', () => {
    page.navigateTo();
    const currentUrl = browser.driver.getCurrentUrl();

    page.fillEmail('kalin@test.com');
    page.fillPassword('123456');

    page.getLoginButton().click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {
      expect(browser.driver.getCurrentUrl()).toContain('/home');
    });

  });

  it('Should not login when invalid credentials are supplied', () => {
    page.navigateTo();
    const currentUrl = browser.driver.getCurrentUrl();

    page.fillEmail('kalin@test.com');
    page.fillPassword('12345690');

    page.getLoginButton().click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 5000).then(() => {
    }).catch(() => {
      expect(browser.driver.getCurrentUrl()).toContain('/user/login');
    });

  });

});
