// Spec: Login
// Casos de teste para a feature de autenticação

import Chance from 'chance'
import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'

const chance = new Chance()
const loginPage = new LoginPage()

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
        loginPage.loginNewUser(userData.newUser.username,userData.newUser.password, chance.company(), chance.natural({ min: 100000000, max: 999999999 }), chance.natural({ min: 100000000, max: 999999999999 }))
    })

})