// Page Object: Transaction
// Responsável por todas as ações e seletores da página de transações

class TransactionPage {

    // Mapeamento dos seletores da página de transações
    selectorsList() {
        const selectors = {
            newTransactionButton: '[data-test="nav-top-new-transaction"]',
            searchListField: '[data-test="user-list-search-input"]',
            userListItem: '[data-test="users-list"] li', // lista de usuários <ul><li>
            amountField: '[data-test="transaction-create-amount-input"]',
            addNoteField: '[data-test="transaction-create-description-input"]',
            submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
            successAlert: '[data-test="alert-bar-success"]',
            accountBalance: '[data-test="sidenav-user-balance"]',
        }
        return selectors
    }

    // Realiza o envio de dinheiro para um contato
    sendMoney(username, value, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().searchListField).click({ force: true }).type(username)
        cy.get(this.selectorsList().userListItem).first().click() // seleciona o primeiro resultado da busca
        cy.get(this.selectorsList().amountField).click().type(value)
        cy.get(this.selectorsList().addNoteField).click().type(note)
        cy.get(this.selectorsList().submitPaymentButton).click()
        cy.get(this.selectorsList().successAlert).should('be.visible')
    }

    // Reutiliza o fluxo de envio de dinheiro para o cenário de saldo insuficiente
    sendMoneyInsufficientBalance(username, value, note) {
        this.sendMoney(username, value, note)
    }

    // Verifica se o saldo da conta está zerado após tentativa de transação
    sendMoneyVerifyZeroBalance() {
        cy.get(this.selectorsList().accountBalance).should('contain', '$0.00')
    }
}

export default TransactionPage