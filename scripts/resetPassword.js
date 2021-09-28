 /*************************************************************************
 * File: resetPassword.js
 * This file contains functions that support the "Reset Password" Dialog.
 ************************************************************************/

let firstFocusableResetPasswordItem = securityAnswerField;

/*************************************************************************
* @function resetPasswordBtn CLICK Handler 
* @Desc 
* When the user clicks the "Reset Password" button link on the "Log In"
* page, transition to the "Reset Password" dialog.
* @global resetPasswordDialog: The "Reset Password" dialog
* @global loginPage: The Log In page
*************************************************************************/
resetPasswordBtn.addEventListener("click",function(e) {
   loginPage.classList.add("hidden");
   resetPasswordActionDialog.classList.remove("hidden");
    document.title = "Reset Password";               
    securityAnswerField.focus();
});

/*************************************************************************
* @function resetPasswordBtn CLICK Handler 
* @Desc 
* When the user clicks the "Reset Password" button link on the "Log In"
* page, transition to the "Reset Password" dialog.
* @global resetPasswordDialog: The "Reset Password" dialog
* @global loginPage: The Log In page
*************************************************************************/
function updatePassword() {
    document.title = "Log In to SpeedScore";
    resetPasswordActionDialog.classList.add("hidden");
    loginPage.classList.remove("hidden");
    loginPageToasts.classList.remove("hidden");
    $('#passwordResetToast').toast('show');
}


/*************************************************************************
 * @function resetPasswordForm SUBMIT Handler 
 * @Desc 
 * When the user clicks on the "Reset Password" button, we first check the
 * validity of the fields, presenting accessible
 * error notifications if errors exist. If no errors exist, we
 * call the resetPassword() function, passing in the account data
 * @global resetPasswordForm: the <form> element whose 
 *         SUBMIT handler is triggered
 * @global newPasswordField: Form's new password field
 * @global newPasswordRepeatField: Form's repeat pw field
 * @global securityAnswerField: Form's security answ field
 * @global resetPasswordErrorBox: <div> containing the error messages
 * @global newPasswordError: Error message for password field
 * @global newPasswordRepeatError: Error message for repeat pw field
 * @global securityQuestionAnswerError: Error message for security answ field
 *************************************************************************/
resetPasswordForm.addEventListener("submit", function(e) {
    e.preventDefault()

    //Is the password field valid?
    let passwordValid = !newPasswordField.validity.patternMismatch && 
                        !newPasswordField.validity.valueMissing;
    let repeatPasswordValid = (newPasswordField.value === 
                               newPasswordRepeatField.value);
    let securityQuestionAnswerValid = (securityAnswerField.value === "Aaron Rodgers")

    if (passwordValid && repeatPasswordValid && securityQuestionAnswerValid) {
        updatePassword();
        return;
    }

    //If here, at least one field is invalid: Display the errors
    //and allow user to fix them.
    resetPasswordErrorBox.classList.remove("hidden");
    document.title = "Error: Update Password";
    if(!repeatPasswordValid) {
        newPasswordRepeatError.classList.remove("hidden");
    } else {
        newPasswordRepeatError.classList.remove("hidden");
    }
    if(!passwordValid) {
        newPasswordError.classList.remove("hidden");
    } else {
        newPasswordError.classList.remove("hidden");
    }
    if(!securityQuestionAnswerValid) {
        securityQuestionAnswerError.classList.remove("hidden");
    } else {
        securityQuestionAnswerError.classList.add("hidden");

    }
})

 /*************************************************************************
 * @function cancelResetPasswordBtn CLICK Handler 
 * @Desc 
 * When the user clicks the "Cancel" button to exit "Reset Password" Dialog, 
 * reset the form and transition to the Log In page.
 * @global resetPasswordActionDialog: The "Reset Password" dialog
 * @global loginPage: The Log In page
 *************************************************************************/
cancelResetPasswordBtn.addEventListener("click",function(e) {
    clearResetPasswordForm();
    document.title = "Log In to SpeedScore";
    resetPasswordActionDialog.classList.add("hidden");
    loginPage.classList.remove("hidden");
});

/*************************************************************************
 * @function clearResetPasswordForm 
 * @Desc 
 * When the user exits the "Reset Password" Dialog, reset the form to
 * show blank data in case the form is visited again.
 * @global newPasswordField: Form's new password field
 * @global newPasswordRepeatField: Form's repeat pw field
 * @global securityAnswerField: Form's security answ field
 * @global resetPasswordErrorBox: <div> containing the error messages
 * @global newPasswordError: Error message for password field
 * @global newPasswordRepeatError: Error message for repeat pw field
 * @global securityQuestionAnswerError: Error message for security answ field
 *************************************************************************/
function clearResetPasswordForm() {
    newPasswordField.value = "";
    newPasswordRepeatField.value = "";
    securityAnswerField.value = "";
    resetPasswordErrorBox.classList.add("hidden");
    newPasswordError.classList.add("hidden");
    newPasswordRepeatError.classList.add("hidden");
    securityQuestionAnswerError.classList.add("hidden");
    firstFocusableResetPasswordItem = securityAnswerField;
}

