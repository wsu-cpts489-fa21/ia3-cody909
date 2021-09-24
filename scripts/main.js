/*************************************************************************
 * File: main.js
 * Definitions of global variables to maintain app state and provide
 * convenient access to DOM elements. Also included are
 * general-purpose functions that are not associated with any particular
 * area of the app.
 ************************************************************************/

//Global variables to help manage the menu */
let focusedMenuItem = 0; //Array index of the menu item with focus
//Array of the HTML elements that are menu items
const menuItems = document.querySelectorAll("li[role='menuitem']");

//Global variables to help manage the mode tabs
let currentMode = 0; //The index of app's current mode
let focusedMode = 0; //The index of the mode button with focus
//Array of mode tab button elements:
const modeTabButtons = 
  document.querySelectorAll("button[role='tab']");
//Array of mode tab panel elements:
const modeTabPanels = 
  document.querySelectorAll("div[role='tabpanel']");

//Global variables to help manage the floating
//action butons and their corresponding dialog boxes
//Array of mode action buttons
const modeActionButtons = 
document.querySelectorAll("button.float-btn");
//array of mode action dialog boxes
const modeActionDialogs =
document.querySelectorAll("div.action-dialog");
//array of "OK" buttons within the dialog boxes
const dialogActionButtons =
document.querySelectorAll("button.action-button");
//array of "Cancel" buttons within the dialog boxes
const dialogCancelButtons =
document.querySelectorAll("button.cancel-button");

//Global variables to provide easy access to top-level UI elements
const menuBtn =  document.getElementById("menuBtn"); 
const sideMenu = document.getElementById("sideMenu");
const searchBtn = document.getElementById("searchBtn");
const profileBtn = document.getElementById("profileBtn");
const skipLink = document.getElementById("sLink");
const modeTabsContainer = document.getElementById("modeTabs");

//Global variables to provide easy access elements in login page and form
const loginPage = document.getElementById("loginPage");
const loginForm = document.getElementById("loginForm");
const errBox = document.getElementById("errorBox");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const emailErr = document.getElementById("emailError");
const passwordErr = document.getElementById("passwordError");
const loginBtnIcon = document.getElementById("loginBtnIcon");
const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const resetPasswordBtn = document.getElementById("resetPasswordBtn");
const accountCreated = document.getElementById("accountCreated");
const accountCreatedClose = document.getElementById("accountCreatedClose");
const accountCreatedEmail = document.getElementById("accountCreatedEmail")

//Global variables to provide easy access to Create Account Dialog elements
const createAccountDialog = document.getElementById("createAccountDialog");
const submitCreateAccountBtn = document.getElementById("submitCreateAccountBtn");
const cancelCreateAccountBtn = document.getElementById("cancelCreateAccountBtn");
const acctErrBox = document.getElementById("acctErrorBox");
const acctEmailField = document.getElementById("acctEmail");
const acctPasswordField = document.getElementById("acctPassword");
const acctPasswordRepeatField = document.getElementById("acctPasswordRepeat");
const acctDisplayNameField = document.getElementById("acctDisplayName");
const acctProfilePicField = document.getElementById("acctProfilePic");
const acctProfilePicImage = document.getElementById("acctProfilePicImage");
const acctSecurityQuestionField = document.getElementById("acctSecurityQuestion");
const acctSecurityAnswerField = document.getElementById("acctSecurityAnswer");
const acctEmailErr = document.getElementById("acctEmailError");
const acctPasswordErr = document.getElementById("acctPasswordError");
const acctPasswordRepeatErr = document.getElementById("acctPasswordRepeatError");
const acctDisplayNameErr = document.getElementById("acctDisplayNameError");
const acctSecurityQuestionErr = document.getElementById("acctSecurityQuestionError");
const acctSecurityAnswerErr = document.getElementById("acctSecurityAnswerError");
const acctEmailValidSymbol = document.getElementById("acctEmailValidSymbol");
const acctEmailInvalidSymbol = document.getElementById("acctEmailInvalidSymbol");
const acctPasswordValidSymbol = document.getElementById("acctPasswordValidSymbol");
const acctPasswordInvalidSymbol = document.getElementById("acctPasswordInvalidSymbol");
const acctPasswordReapeatValidSymbol = document.getElementById("acctPasswordReapeatValidSymbol");
const acctPasswordRepeatInvalidSymbol = document.getElementById("acctPasswordRepeatInvalidSymbol");
const acctDisplayNameValidSymbol = document.getElementById("acctDisplayNameValidSymbol");
const acctDisplayNameInvalidSymbol = document.getElementById("acctDisplayNameInvalidSymbol");
const acctSecurityQuestionValidSymbol = document.getElementById("acctSecurityQuestionValidSymbol");
const acctSecutiryQuestionInvalidSymbol = document.getElementById("acctSecutiryQuestionInvalidSymbol");
const acctSecurityAnswerValidSymbol = document.getElementById("acctSecurityAnswerValidSymbol");
const acctSecurityAnswerInvalidSymbol = document.getElementById("acctSecurityAnswerInvalidSymbol");

//Default profile picture
defaultProfilePic = "../images/DefaultProfilePic.jpg";