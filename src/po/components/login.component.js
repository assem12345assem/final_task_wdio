const BaseComponent = require("./base.component") ;

class LoginComponent extends BaseComponent {
    constructor() {
        super('.login-box');
    }
    input(name) {
        const selectors = {
            username: '#user-name',
            password: '#password'
        }
        return this.rootEl.$(selectors[name.toLowerCase()])
    }
    get loginBtn() {
        return $('#login-button')
    }

    get error() {
        return this.rootEl.$('h3')
    }
}

module.exports = LoginComponent;