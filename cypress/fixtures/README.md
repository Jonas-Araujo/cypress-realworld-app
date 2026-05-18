# Fixtures

Esta pasta contém os dados de teste utilizados nos specs do projeto.

## userData.json

| Chave | Descrição |
|---|---|
| `userSuccess` | Usuário válido para testes de login com sucesso |
| `userFail` | Usuário inválido para testes de login com falha |
| `newUser` | Dados para cadastro de novo usuário |
| `successTransaction` | Dados para transação com saldo suficiente |
| `insufficientAmount` | Dados para transação com saldo insuficiente |
| `contactUser` | Usuário de destino para transações |

## Observações

- A senha padrão dos usuários existentes no banco é `s3cret`
- O `newUser` é utilizado nos testes de Sign Up e Transaction History
- Os usuários são baseados no seed do banco de dados da aplicação (`data/database-seed.json`)