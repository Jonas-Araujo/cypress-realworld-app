// Spec: Sign Up
// Casos de teste para a feature de cadastro de novos usuários

import userData from '../../fixtures/userData.json'
import Chance from 'chance'
import LoginPage from '../../pages/loginPage'
import SignUpPage from '../../pages/signUpPage'

const chance = new Chance()
const password = chance.string({ length: 8, alpha: true, numeric: true }) // senha aleatória gerada pelo Chance

const loginPage   = new LoginPage()
const signUpPage  = new SignUpPage()

describe('Real World App | Sign Up', () => {

    it('Sign Up - Success', () => {
        cy.log('Senha gerada: ' + password) // exibe a senha no Cypress Runner para rastreabilidade
        loginPage.accessLoginPage()
        signUpPage.signUpUser(chance.first(), chance.last(), chance.twitter(), password, password)
    })

    it('Sign Up - Incomplete Fields', () => {
        loginPage.accessLoginPage()
        signUpPage.signUpIncomplete()
        signUpPage.errorAlert()
    })

})