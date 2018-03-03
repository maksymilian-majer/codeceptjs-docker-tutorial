/// <reference path="../../steps.d.ts" />

Feature('Login @current');

Scenario('???', (I, Security) => {
    I.amOnPage('/wp-login.php');
    I.see('Username or Email Address');
    I.see('Password');
});