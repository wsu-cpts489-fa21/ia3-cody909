import { Selector } from 'testcafe';

fixture `task2Tests`
    .page `http://127.0.0.1:5501/index.html`;

const emailInput = Selector("#acctEmail");
const passwordInput = Selector("#acctPassword");
const passwordRepeatInput = Selector("#acctPasswordRepeat");
const displayNameInput = Selector("#acctDisplayName");
const securityQuestionInput = Selector("#acctSecurityQuestion");
const securityAnswerInput = Selector("#acctSecurityAnswer");
const toast = Selector("#loginPageToast");

test('toast notification appears after creating account', async t => {
    await t
        .click('#createAccountBtn')
        .typeText(emailInput, "blonded@gmail.com")
        .typeText(passwordInput, "FrankIsGoat12")
        .typeText(passwordRepeatInput, "FrankIsGoat12")
        .typeText(displayNameInput, "Frankie")
        .typeText(securityQuestionInput, "Blond or Channel Orange?")
        .typeText(securityAnswerInput, "Channel Orange")
        .click('#submitCreateAccountBtn')
        .expect(toast.visible).eql(true);
});

test('toast dismiss button hides toast', async t => {
    await t
    .click('#createAccountBtn')
    .typeText(emailInput, "blonded@gmail.com")
    .typeText(passwordInput, "FrankIsGoat12")
    .typeText(passwordRepeatInput, "FrankIsGoat12")
    .typeText(displayNameInput, "Frankie")
    .typeText(securityQuestionInput, "Blond or Channel Orange?")
    .typeText(securityAnswerInput, "Channel Orange")
    .click('#submitCreateAccountBtn')
    .expect(toast.visible).eql(true)
    .click("#loginPageToastDismissBtn")
    .expect(toast.visible).eql(false)
});

test('toast does not appear if user hits cancel button i.e. no new account created', async t => {
    await t 
        .click('#createAccountBtn')
        .click('#cancelCreateAccountBtn')
        .expect(Selector('#loginPage').visible).eql(true)
        .expect(toast.visible).eql(false)
});