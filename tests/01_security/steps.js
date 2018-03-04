module.exports = {

  _init() {
    I = actor();
  },

  loginUrl: '/wp-login.php',

  // in a real world scenario you'll want to get those
  // from environment variables:
  adminCredentials: {
    user: 'admin',
    password: 'secureP@ssw0rd1'
  },

  // setting locators
  fields: {
    user: 'Username or Email Address',
    password: 'Password'
  },
  loginButton: 'Log In',

  // introducing methods

  loginWith(username, password) {
    I.amOnPage(this.loginUrl);
    I.fillField(this.fields.user, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },

  loginAsAdmin() {
    this.loginWith(this.adminCredentials.user, this.adminCredentials.password);
  },
};