import { Selector } from 'testcafe';

fixture `task2Tests`
    .page `http://127.0.0.1:5501/index.html`;

const securityErr = Selector("#securityQuestionAnswerError")
const passwordErr = Selector("#resetPasswordError")
const repeatPasswordErr = Selector("#resetPasswordRepeatError")
const securityAnswerInput = Selector("#securityQuestionAnswer")
const passwordInput = Selector("#newPassword")
const repeatPasswordInput = Selector("#newPasswordRepeat")
const toast = Selector("#loginPageToast")
const loginPage = Selector("#loginPage")
const resetPasswordDialog = Selector("#resetPasswordActionDialog")

// test('all inputs invalid', async t => {
//     await t
//         .click('#resetPasswordBtn')
//         .typeText(securityAnswerInput, "Tom Brady")
//         .typeText(passwordInput, "password")
//         .typeText(repeatPasswordInput, "abcdefg")
//         .click("#submitResetPasswordBtn")
//         .expect(securityErr.visible).eql(true)
//         .expect(passwordErr.visible).eql(true)
//         .expect(repeatPasswordErr.visible).eql(true)
//         .expect(resetPasswordDialog.visible).eql(true)
//         .expect(loginPage.visible).eql(false)
// });

// test('input fields left blank', async t => {
//     await t
//         .click('#resetPasswordBtn')
//         .click("#submitResetPasswordBtn")
//         .expect(securityErr.visible).eql(true)
//         .expect(passwordErr.visible).eql(true)
//         .expect(repeatPasswordErr.visible).eql(true)
//         .expect(resetPasswordDialog.visible).eql(true)
//         .expect(loginPage.visible).eql(false)
// });

test('all valid inputs goes back to login page and display toast', async t => {
    await t
        .click('#resetPasswordBtn')
        .typeText(securityAnswerInput, "Aaron Rodgers")
        .typeText(passwordInput, "WhiteFerari12")
        .typeText(repeatPasswordInput, "WhiteFerari12")
        .click("#submitResetPasswordBtn")
        .expect(loginPage.visible).eql(true)
        .expect(toast.visible).eql(true)
        .expect(resetPasswordDialog.visible).eql(false)
});
