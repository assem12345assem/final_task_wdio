const BasePage = require('./base.page');
const LoginComponent = require("./../components/login.component");
const testData = require('./../consts/test.data.json')
class LoginPage extends BasePage{
    constructor() {
        super(testData.constructors.main)
        this.elems = new LoginComponent()
    }

}

module.exports = new LoginPage();