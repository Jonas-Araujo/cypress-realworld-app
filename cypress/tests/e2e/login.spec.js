// Spec: Login
// Casos de teste para a feature de autenticação

import userData from '../../fixtures/userData.json'
import Chance from 'chance'
import LoginPage from '../../pages/loginPage'
import SignUpPage from '../../pages/signUpPage'

const chance = new Chance()
const loginPage = new LoginPage()
const signUpPage = new SignUpPage()


describe('Real World App | Login Tests', () => {

    it('Login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    })

    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.wrongLoginAlert(userData.userFail.username, userData.userFail.password)
    })

    it('Login - With New User', () => {
        loginPage.accessLoginPage()
        signUpPage.signUpUser(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.username, userData.newUser.password, userData.newUser.confirmPassword)
        loginPage.loginNewUser(userData.newUser.username,userData.newUser.password, chance.company(), chance.natural({ min: 100000000, max: 999999999 }), chance.natural({ min: 100000000, max: 999999999999 }))
    })

})