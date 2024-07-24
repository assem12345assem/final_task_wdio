const { expect } = require('@wdio/globals')
const LoginPage = require('./../po/pages/login.page')
const testData = require('./../po/consts/test.data.json')
describe('My Login application', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('uc1. Test Login form with empty credentials', async () => {
        await LoginPage.elems.input('username').clearValue()
        await LoginPage.elems.input('password').clearValue()
        await LoginPage.elems.loginBtn.click()
        await expect( LoginPage.elems.error).toHaveTextContaining(testData.messages.usernameRequired)
    })

    it('uc2. Test Login form with credentials by passing Username:', async () => {
        await LoginPage.elems.input('username').setValue(testData.credentials.invalidUsername)
        await LoginPage.elems.input('password').clearValue()
        await LoginPage.elems.loginBtn.click()
        await expect( LoginPage.elems.error).toHaveTextContaining(testData.messages.passwordRequired)
    })

    it('uc3. Test Login form with credentials by passing Username & Password:', async () => {
        await LoginPage.elems.input('username').setValue(testData.credentials.validUsername)
        await LoginPage.elems.input('password').setValue(testData.credentials.validPassword)
        await LoginPage.elems.loginBtn.click()
        await expect(browser).toHaveTitle(testData.pageTitles.successLogin)
    })
})

