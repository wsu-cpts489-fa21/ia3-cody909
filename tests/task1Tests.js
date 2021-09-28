import { Selector, t } from 'testcafe';

fixture `menuTests`
    .page `http://127.0.0.1:5501/index.html`;

const emailInput = Selector("#acctEmail");
const emailRedX = Selector("#acctEmailInvalidSymbol");
const emailGreen = Selector("")

const passwordInput = Selector("#acctPassword");
const passwordRedX = Selector("#acctPasswordInvalidSymbol");
const passwordGreenCheck = Selector("acctPasswordValidSymbol");

const passwordRepeatInput = Selector("#acctPasswordRepeat");
const passwordRepeatRedX = Selector("#acctPasswordRepeatInvalidSymbol");
const passwordRepeatGreenCheck = Selector("acctPasswordRepeatValidSymbol");

const displayNameInput = Selector("#acctDisplayName");
const displayNameRedX = Selector("#acctDisplayNameInvalidSymbol");
const displayNameGreenCheck = Selector("acctDisplayNameValidSymbol");

const securityQuestionInput = Selector("#acctSecurityQuestion");
const securityQuestionRedX = Selector("#acctSecurityQuestionInvalidSymbol");
const securityQuestionGreenCheck = Selector("#acctSecurityQuestionValidSymbol");

const securityAnswerInput = Selector("#acctSecurityAnswer");
const securityAnswerRedX = Selector("#acctSecurityAnswerInvalidSymbol");
const securityAnswerGreenCheck = Selector("acctSecurityAnswerValidSymbol");

test('allInvalidFormInputs', async t => {
    await t
        .click("#createAccountBtn")

        .typeText(emailInput, "jondoe")
        .typeText(passwordInput, "abc")
        .typeText(passwordRepeatInput, "abs")
        .typeText(displayNameInput, "abc")
        .typeText(securityQuestionInput, "abc")
        .typeText(securityAnswerInput, "bcd")

        .click('#submitCreateAccountBtn')

        .expect(emailRedX.visible).eql(true)
        .expect(passwordRedX.visible).eql(true)
        .expect(passwordRepeatRedX.visible).eql(true)
        .expect(displayNameRedX.visible).eql(true)
        .expect(securityQuestionRedX.visible).eql(true)
        .expect(securityAnswerRedX.visible).eql(true)
})

test ('feildsLeftBlank', async t => {
    await t
        .click("#createAccountBtn")
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
})

test ('allValidExceptEmail', async => {
    await t
        .click("#createAccountBtn")

        .expect(emailRedX.visible).eql(true)
        .expect(passwordRedX.visible).eql(false)
        .expect(passwordRepeatRedX.visible).eql(false)
        .expect(displayNameRedX.visible).eql(false)
        .expect(securityQuestionRedX.visible).eql(false)
        .expect(securityAnswerRedX.visible).eql(false)

        .typeText(emailInput, "blonded")
        .typeText(passwordInput, "FrankIsGoat12")
        .typeText(passwordRepeatInput, "FrankIsGoat12")
        .typeText(displayNameInput, "Frankie")
        .typeText(securityQuestionInput, "Blond or Channel Orange?")
        .typeText(securityAnswerInput, "Channel Orange")

        .expect(emailGreen.visible).eql(false)
        .expect(passwordGreenCheck.visible).eql(true)
        .expect(passwordRepeatGreenCheck.visible).eql(true)
        .expect(displayNameGreenCheck.visible).eql(true)
        .expect(securityQuestionGreenCheck.visible).eql(true)
        .expect(securityAnswerGreenCheck.visible).eql(true)
})