/// <reference path="../../steps.d.ts" />

Feature('Login @current');

Scenario('Login page has Username and Password labels', (I, Security) => {
    I.amOnPage('/wp-login.php');
    I.see('Username or Email Address');
    I.see('Password');
});