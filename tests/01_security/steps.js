/// <reference path="../../steps.d.ts" />
module.exports = {

  _init() {
    I = actor();
  },

  loginWith: function (username, password) {
  },

  loginAsAdmin: function () {
    this.loginWith('todo', 'todo');
  },
};