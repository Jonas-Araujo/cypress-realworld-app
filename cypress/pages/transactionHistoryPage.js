// Page Object: Transaction History
// Responsável por todas as ações e seletores da página de histórico de transações

class TransactionHistoryPage {

    // Mapeamento dos seletores da página de histórico
    selectorsList() {
        const selectors = {
            personalTab: '[data-test="nav-personal-tab"]',
            transactionList: '[data-test="transaction-list"]',
            transactionsContainer: '.MuiContainer-maxWidthMd',
        }
        return selectors
    }

    // Verifica se o histórico de transações é exibido corretamente
    checkTransactions() {
        cy.get(this.selectorsList().personalTab).click()
        cy.get(this.selectorsList().transactionList).should('have.length.greaterThan', 0)
    }

    // Verifica se a mensagem de ausência de transações é exibida para novo usuário
    newUserHistory() {
        cy.get(this.selectorsList().personalTab).click()
        cy.get(this.selectorsList().transactionsContainer).should('contain', 'No Transactions')
    }
}

export default TransactionHistoryPage