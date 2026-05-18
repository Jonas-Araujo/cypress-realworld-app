// Spec: Transaction History
// Casos de teste para a feature de visualização do histórico de transações

import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import SignUpPage from '../../pages/signUpPage';
import TransactionHistoryPage from '../../pages/transactionHistoryPage'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Real World App | Transaction History', () => {

    // Usuário com transações anteriores — verifica se o histórico é exibido
    it('Transaction History - View With Transactions', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        transactionHistoryPage.checkTransactions()
    })

    // Usuário recém cadastrado sem transações — verifica mensagem de histórico vazio
    it('Transaction History - View Without Transactions', () => {
        loginPage.accessLoginPage()
        signUpPage.signUpUser(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.username, userData.newUser.password, userData.newUser.confirmPassword)
        loginPage.loginNewUser(userData.newUser.username, userData.newUser.password)
        transactionHistoryPage.newUserHistory()
    })

})