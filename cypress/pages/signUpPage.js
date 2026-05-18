// Page Object: Sign Up
// Responsável por todas as ações e seletores da página de cadastro

class SignUpPage {

    // Mapeamento dos seletores da página de cadastro
    selectorsList() {
        const selectors = {
            signUpButton: '[data-test="signup"]',
            firstNameField: '[data-test="signup-first-name"]',
            lastNameField: '[data-test="signup-last-name"]',
            usernameField: '[data-test="signup-username"]',
            passwordField: '[data-test="signup-password"]',
            confirmPasswordField: '[data-test="signup-confirmPassword"]',
            signUpConfirmButton: '[data-test="signup-submit"]',
            signUpConfirm: '.SignInForm-form',

            // Seletores das mensagens de erro de validação
            firstNameError: '#firstName-helper-text',
            lastNameError: '#lastName-helper-text',
            usernameError: '#username-helper-text',
            passwordError: '#password-helper-text',
            confirmPasswordError: '#confirmPassword-helper-text',
        }
        return selectors
    }

    // Preenche todos os campos e conclui o cadastro de um novo usuário
    signUpUser(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().firstNameField).click().type(firstName)
        cy.get(this.selectorsList().lastNameField).click().type(lastName)
        cy.get(this.selectorsList().usernameField).click().type(username)
        cy.get(this.selectorsList().passwordField).click().type(password)
        cy.get(this.selectorsList().confirmPasswordField).click().type(confirmPassword)
        cy.get(this.selectorsList().signUpConfirmButton).click()
        cy.get(this.selectorsList().signUpConfirm)
    }

    // Acessa o formulário de cadastro e clica em todos os campos sem preencher
    // para disparar as mensagens de validação
    signUpIncomplete() {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().firstNameField).click()
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get(this.selectorsList().firstNameField).click() // volta ao primeiro campo para disparar todos os erros
    }

    // Verifica as mensagens de erro de validação de cada campo obrigatório
    errorAlert() {
        cy.get(this.selectorsList().firstNameError).should('contain', 'First Name is required')
        cy.get(this.selectorsList().lastNameError).should('contain', 'Last Name is required')
        cy.get(this.selectorsList().usernameError).should('contain', 'Username is required')
        cy.get(this.selectorsList().passwordError).should('contain', 'Enter your password')
        cy.get(this.selectorsList().confirmPasswordError).should('contain', 'Confirm your password')
    }
}

export default SignUpPage