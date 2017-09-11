import { browser, by, element } from 'protractor';
import { UserPage } from './user.po';
import { protractor } from 'protractor/built/ptor';

describe('Login Page', () => {
  let page: UserPage;

  beforeEach(() => {
    page = new UserPage();
  });

  it('Should load the user page with correct welcome message', () => {
    page.navigateTo();
    const currentUrl = browser.driver.getCurrentUrl();

    page.fillEmail('kalin@test.com');
    page.fillPassword('123456');

    page.getLoginButton().click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        page.nagivateToUserPage();

        browser.wait(EC.presenceOf(element(by.css('h1'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('h1'));
            expect(titleTag.getText()).toContain('kalin@test.com');

        });
    });
  });

  it('Should display the correct number of signed petitions', () => {
    page.navigateTo();
    const currentUrl = browser.driver.getCurrentUrl();

    page.fillEmail('kalin@test.com');
    page.fillPassword('123456');

    page.getLoginButton().click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        page.nagivateToUserPage();

        browser.wait(EC.presenceOf(element(by.css('.my-petitions'))), 10000).then(() => {

            const elements = protractor.element.all(by.css('.my-petitions'));
            expect(elements.count()).toBe(1);

        });
    });
  });

});
