const { expect } = require('@wdio/globals')
const {pages} = require('./../po')

describe('My Login application', () => {

    beforeEach(async () => {
        await pages('login').open()
    })

    it('uc1. Test Login form with empty credentials', async () => {
        await pages('login').login.input('username').clearValue()
        await pages('login').login.input('password').clearValue()
        await pages('login').login.loginBtn.click()
        await expect( pages('login').login.error).toHaveTextContaining('Username is required')
    })

    it('uc2. Test Login form with credentials by passing Username:', async () => {
        await pages('login').login.input('username').setValue('anyvalue')
        await pages('login').login.input('password').clearValue()
        await pages('login').login.loginBtn.click()
        await expect( pages('login').login.error).toHaveTextContaining('Password is required')
    })

    it('uc3. Test Login form with credentials by passing Username & Password:', async () => {
        await pages('login').login.input('username').setValue('standard_user')
        await pages('login').login.input('password').setValue('secret_sauce')
        await pages('login').login.loginBtn.click()
        await expect(browser).toHaveTitle('Swag Labs')
    })
})

