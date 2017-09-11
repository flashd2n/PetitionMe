import { browser } from 'protractor';
import { RegisterPage } from './register.po';
import { protractor } from 'protractor/built/ptor';

describe('Login Page', () => {
    let page: RegisterPage;

    beforeEach(() => {
        page = new RegisterPage();
    });

    it('Should load the page with all fields', () => {
        page.navigateTo();
        expect(page.getEmailField()).toBeTruthy();
        expect(page.getPasswordField()).toBeTruthy();
        expect(page.getConfPasswordField()).toBeTruthy();
    });

    it('Should enable the register button when email and both password are provided', () => {
        page.navigateTo();

        page.fillEmail('kalin@test.com');
        page.fillPassword('123456');
        page.fillConfPassword('123456');

        expect(page.getRegisterButton().isEnabled()).toBeTruthy();
    });

    it('Should register successfully and redirect to homepage when valid credentials are provided', () => {
        page.navigateTo();
        const currentUrl = browser.driver.getCurrentUrl();

        const randomnumber = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)) + Number.MIN_SAFE_INTEGER;

        page.fillEmail('gosho' + randomnumber + '@test.com');
        page.fillPassword('123456');
        page.fillConfPassword('123456');

        page.getRegisterButton().click();

        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('/home'), 10000).then(() => {
            expect(browser.driver.getCurrentUrl()).toContain('/home');
        });

    });

    it('Should not register when invalid credentials are supplied', () => {
        page.navigateTo();
        const currentUrl = browser.driver.getCurrentUrl();

        const randomnumber = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)) + Number.MIN_SAFE_INTEGER;

        page.fillEmail('gosho' + randomnumber + '@test.com');
        page.fillPassword('123456');
        page.fillConfPassword('1234569');

        page.getRegisterButton().click();

        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('/home'), 5000).then(() => {
            expect(browser.driver.getCurrentUrl()).toContain('/user/register');
        }).catch(() => {
            expect(browser.driver.getCurrentUrl()).toContain('/user/register');
        });

    });

});
