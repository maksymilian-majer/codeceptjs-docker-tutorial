/// <reference path="../../steps.d.ts" />

Feature('Login');

Scenario('???', (I, Security) => {
    I.amOnPage('/wp-login.php');
    I.see('Username or Email Address');
    I.see('Password');
});