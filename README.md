# Cypress Real World App — Testes Automatizados

Fork do projeto [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app) com suíte de testes automatizados desenvolvida como estudo de automação com Cypress.

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/en/) versão 22
- [nvm](https://github.com/nvm-sh/nvm) — gerenciador de versões do Node
- [Yarn Classic](https://classic.yarnpkg.com/) (versão 1)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Jonas-Araujo/cypress-realworld-app
cd cypress-realworld-app
```

### 2. Configure a versão do Node

```bash
nvm use 22
```

### 3. Instale o Yarn globalmente

```bash
npm install yarn@latest -g
```

### 4. Instale as dependências

```bash
yarn
```

### 5. Inicie a aplicação

```bash
yarn dev
```

> A aplicação vai rodar em:
> - Frontend: http://localhost:3000
> - Backend: http://localhost:3001

> ⚠️ Aguarde aparecer `Backend server running at http://localhost:3001` antes de abrir o Cypress.

### 6. Abra o Cypress em outro terminal

```bash
yarn cypress:open
```

---

## 🔄 Resetar o banco de dados

O banco é resetado automaticamente toda vez que o `yarn dev` é iniciado.

Para resetar manualmente sem reiniciar a aplicação:

```bash
yarn db:seed
```

> Isso é necessário para rodar os testes a partir de um estado limpo.

---

## 🧪 Testes criados

| Spec | Descrição |
|---|---|
| `login.spec.js` | Login com sucesso, falha e novo usuário |
| `signup.spec.js` | Cadastro com sucesso e campos incompletos |
| `transaction.spec.js` | Envio de dinheiro com saldo suficiente |
| `transactionHistory.spec.js` | Histórico com e sem transações |

---

## 📁 Estrutura dos testes

```
cypress/
├── fixtures/
│   ├── userData.json       # Dados de teste
│   └── README.md           # Documentação dos dados
├── pages/                  # Page Objects
│   ├── loginPage.js
│   ├── signUpPage.js
│   ├── transactionPage.js
│   └── transactionHistoryPage.js
└── tests/
    └── e2e/
        ├── login.spec.js
        ├── signup.spec.js
        ├── transaction.spec.js
        └── transactionHistory.spec.js
```
---

## 🐛 Bugs conhecidos

| Feature | Descrição |
|---|---|
| Saldo insuficiente | O sistema permite transações mesmo sem saldo suficiente. Teste marcado com `it.skip` aguardando correção. |

---

## 🛠 Tecnologias utilizadas

- [Cypress](https://cypress.io)
- [Chance.js](https://chancejs.com) — geração de dados aleatórios
- Page Object Model (POM)

---

## 👤 Autor

**Jonas Araujo**
[GitHub](https://github.com/Jonas-Araujo)
