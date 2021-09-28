import { Selector } from 'testcafe';

fixture `task1Tests`
    .page `http://127.0.0.1:5501/index.html`;

const emailInput = Selector("#acctEmail");
const emailRedX = Selector("#acctEmailInvalidSymbol");
const emailGreen = Selector("#acctEmailValidSymbol");

const passwordInput = Selector("#acctPassword");
const passwordRedX = Selector("#acctPasswordInvalidSymbol");
const passwordGreenCheck = Selector("#acctPasswordValidSymbol");

const passwordRepeatInput = Selector("#acctPasswordRepeat");
const passwordRepeatRedX = Selector("#acctPasswordRepeatInvalidSymbol");
const passwordRepeatGreenCheck = Selector("#acctPasswordReapeatValidSymbol");

const displayNameInput = Selector("#acctDisplayName");
const displayNameRedX = Selector("#acctDisplayNameInvalidSymbol");
const displayNameGreenCheck = Selector("#acctDisplayNameValidSymbol");

const securityQuestionInput = Selector("#acctSecurityQuestion");
const securityQuestionRedX = Selector("#acctSecutiryQuestionInvalidSymbol");
const securityQuestionGreenCheck = Selector("#acctSecurityQuestionValidSymbol");

const securityAnswerInput = Selector("#acctSecurityAnswer");
const securityAnswerRedX = Selector("#acctSecurityAnswerInvalidSymbol");
const securityAnswerGreenCheck = Selector("#acctSecurityAnswerValidSymbol");

test('all inputs invalid', async t => {
    await t
        .click('#createAccountBtn')
        .expect(Selector('#createAccountDialog').visible).eql(true)

        .typeText(emailInput, "blonded")
        .typeText(passwordInput, "password")
        .typeText(passwordInput, "pyramids")
        .typeText(displayNameInput, "Jed")
        .typeText(securityQuestionInput, "yes")
        .typeText(securityAnswerInput, "no")

        .click('#submitCreateAccountBtn')

        .expect(emailRedX.visible).eql(true)
        .expect(passwordRedX.visible).eql(true)
        .expect(passwordRepeatRedX.visible).eql(true)
        .expect(displayNameRedX.visible).eql(true)
        .expect(securityQuestionRedX.visible).eql(true)
        .expect(securityAnswerRedX.visible).eql(true) 

        .expect(emailGreen.visible).eql(false)
        .expect(passwordGreenCheck.visible).eql(false)
        .expect(passwordRepeatGreenCheck.visible).eql(false)
        .expect(displayNameGreenCheck.visible).eql(false)
        .expect(securityQuestionGreenCheck.visible).eql(false)
        .expect(securityAnswerGreenCheck.visible).eql(false)
});

test('all inputs left blank', async t => {
    await t
        .click('#createAccountBtn')
        .expect(Selector('#createAccountDialog').visible).eql(true)
        .click('#submitCreateAccountBtn')

        .expect(emailRedX.visible).eql(true)
        .expect(passwordRedX.visible).eql(true)
        .expect(passwordRepeatRedX.visible).eql(true)
        .expect(displayNameRedX.visible).eql(true)
        .expect(securityQuestionRedX.visible).eql(true)
        .expect(securityAnswerRedX.visible).eql(true)

        .expect(emailGreen.visible).eql(false)
        .expect(passwordGreenCheck.visible).eql(false)
        .expect(passwordRepeatGreenCheck.visible).eql(false)
        .expect(displayNameGreenCheck.visible).eql(false)
        .expect(securityQuestionGreenCheck.visible).eql(false)
        .expect(securityAnswerGreenCheck.visible).eql(false)
});

test('all valid inputs except email', async t => {
    await t
        .click('#createAccountBtn')
        .expect(Selector('#createAccountDialog').visible).eql(true)

        .typeText(emailInput, "blonded")
        .typeText(passwordInput, "FrankIsGoat12")
        .typeText(passwordRepeatInput, "FrankIsGoat12")
        .typeText(displayNameInput, "Frankie")
        .typeText(securityQuestionInput, "Blond or Channel Orange?")
        .typeText(securityAnswerInput, "Channel Orange")

        .click('#submitCreateAccountBtn')

        .expect(emailRedX.visible).eql(true)
        .expect(passwordRedX.visible).eql(false)
        .expect(passwordRepeatRedX.visible).eql(false)
        .expect(displayNameRedX.visible).eql(false)
        .expect(securityQuestionRedX.visible).eql(false)
        .expect(securityAnswerRedX.visible).eql(false)

        .expect(emailGreen.visible).eql(false)
        .expect(passwordGreenCheck.visible).eql(true)
        .expect(passwordRepeatGreenCheck.visible).eql(true)
        .expect(displayNameGreenCheck.visible).eql(true)
        .expect(securityQuestionGreenCheck.visible).eql(true)
        .expect(securityAnswerGreenCheck.visible).eql(true)
});

test('all inputs valid', async t => {
    await t
    .click('#createAccountBtn')
    .expect(Selector('#createAccountDialog').visible).eql(true)

    .typeText(emailInput, "blonded@gmail.com")
    .typeText(passwordInput, "FrankIsGoat12")
    .typeText(passwordRepeatInput, "FrankIsGoat12")
    .typeText(displayNameInput, "Frankie")
    .typeText(securityQuestionInput, "Blond or Channel Orange?")
    .typeText(securityAnswerInput, "Channel Orange")

    .click('#submitCreateAccountBtn')
    .expect(Selector("#loginPage").visible).eql(true)
})