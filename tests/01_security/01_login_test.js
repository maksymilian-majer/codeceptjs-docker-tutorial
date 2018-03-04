/// <reference path="../../steps.d.ts" />

Feature('Login @current');

Scenario('Login page has Username and Password labels', (I) => {
    I.amOnPage('/wp-login.php');
    I.see('Username or Email Address');
    I.see('Password');
});


Scenario('Password field is required', (I) => {
    I.amOnPage('/wp-login.php');
    I.fillField('Username or Email Address', 'maks');
    I.click('Log In');
    I.see('ERROR: The password field is empty.');
});


Scenario('Invalid username or password', (I, Security) => {
    I.amOnPage('/wp-login.php');
    Security.loginWith('maks', 'some wrong password');
    I.see('ERROR: Invalid username. Lost your password?');
});


Scenario('Login with correct credentials', (I, Security) => {
    I.amOnPage('/wp-login.php');
    Security.loginAsAdmin();
    I.seeInCurrentUrl('/wp-admin/');
    I.see('Welcome to WordPress!');
});