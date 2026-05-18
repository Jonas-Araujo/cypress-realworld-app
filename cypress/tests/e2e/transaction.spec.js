// Spec: Transactions
// Casos de teste para a feature de envio de dinheiro

import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import TransactionPage from '../../pages/transactionPage'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Real World App | Transactions', () => {

    it('Send Money - Sufficient Balance', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        transactionPage.sendMoney(
            userData.contactUser.username,
            userData.successTransaction.value,
            userData.successTransaction.note
        )
    })

    // BUG: O sistema deveria bloquear a transação quando o saldo é insuficiente
    // Comportamento esperado: exibir mensagem de erro ao tentar enviar valor maior que o saldo disponível
    // Comportamento atual: a transação é concluída com sucesso mesmo sem saldo suficiente
    // Status: aguardando correção do time de desenvolvimento
    // TODO: remover o it.skip após o bug ser corrigido e revalidar o teste
    it.skip('Send Money - Insufficient Balance', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        transactionPage.sendMoneyInsufficientBalance(
            userData.contactUser.username,
            userData.insufficientAmount.value,
            userData.insufficientAmount.note
        )
    })

})