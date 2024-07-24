const BaseComponent = require("./base.component") ;
const testData = require('./../consts/test.data.json')
class LoginComponent extends BaseComponent {
    constructor() {
        super(testData.constructors.main);
    }
    input(name) {
        const selectors = {
            username: testData.selectors.username,
            password: testData.selectors.password
        }
        return $(selectors[name.toLowerCase()])

    }
    get loginBtn() {
        return $(testData.selectors.loginButton)
    }

    get error() {
        return $(testData.selectors.errorMessage)
    }
}

module.exports = LoginComponent;