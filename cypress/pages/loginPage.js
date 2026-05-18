// Page Object: Login
// Responsável por todas as ações e seletores da página de login

class LoginPage {

    // Mapeamento dos seletores da página de login
    selectorsList() {
        const selectors = {
            usernameField:       '[data-test="signin-username"]',
            passwordField:       '[data-test="signin-password"]',
            signinSubmitButton:  '[data-test="signin-submit"]',
            alertMessage:        '[data-test="signin-error"]',
            onboardingDialog:    '[data-test="user-onboarding-dialog-title"]',
            nextButton:          '[data-test="user-onboarding-next"]',
            bankNameInput:       '[data-test="bankaccount-bankName-input"]',
            routingNumberInput:  '[data-test="bankaccount-routingNumber-input"]',
            accountNumberInput:  '[data-test="bankaccount-accountNumber-input"]',
            saveButton:          '[data-test="bankaccount-submit"]',
        }
        return selectors
    }

    // Acessa a página inicial da aplicação
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    // Realiza login com qualquer usuário válido
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signinSubmitButton).click({ force: true })
    }

    // Realiza login e verifica mensagem de erro para credenciais inválidas
    wrongLoginAlert(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signinSubmitButton).click({ force: true })
        cy.get(this.selectorsList().alertMessage).should('be.visible')
    }

    // Realiza login com usuário recém cadastrado e preenche o onboarding
    // O modal de onboarding só aparece na primeira vez que o usuário loga
    loginNewUser(username, password, bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signinSubmitButton).click({ force: true })

        // Verifica se o modal de onboarding aparece — apenas para novos usuários
        cy.get('body').then(($body) => {
            if ($body.find(this.selectorsList().onboardingDialog).length > 0) {
                cy.get(this.selectorsList().nextButton).click()
                cy.get(this.selectorsList().bankNameInput).click().type(bankName)
                cy.get(this.selectorsList().routingNumberInput).click().type(routingNumber)
                cy.get(this.selectorsList().accountNumberInput).click().type(accountNumber)
                cy.get(this.selectorsList().saveButton).click()
                cy.get(this.selectorsList().nextButton).click()
            }
        })
    }
}

export default LoginPage