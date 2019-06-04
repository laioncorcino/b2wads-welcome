# b2wads-welcome

[![codecov](https://codecov.io/gh/b2wads/b2wads-welcome/branch/master/graph/badge.svg?token=kAuzTXzjjm)](https://codecov.io/gh/b2wads/b2wads-welcome)

---

## Índice

- [Introdução](https://github.com/b2wads/b2wads-welcome#introdução)
- [Como rodar](https://github.com/b2wads/b2wads-welcome/blob#como-rodar)
- [Passo a passo](https://github.com/b2wads/b2wads-welcome#passo-a-passo)
- [Scripts](https://github.com/b2wads/b2wads-welcome#scripts)

### Introdução

Projeto de boas vindas a novos integrantes do B2WADS. b2wads-welcome é um projeto escrito em NodeJS, que utiliza os padrões de código definidos em [nodejs-boilerplate](https://github.com/b2wads/nodejs-boilerplate) e tem como objetivo, ser a ambientação aos projetos desenvolvidos pelo time do B2WADS.

### Como rodar

```shell
npm install
npm start
```

### Passo a Passo

- Faça clone desse projeto localmente:

```sh
git clone https://github.com/b2wads/b2wads-welcome.git
```

- Crie um branch com seu primeiro e ultimo nome:

```sh
git branch rick-sanchez
```

- Entre no arquivo [services/welcome-service.js](services/welcome-service.js) e siga os comentários.
- Entre no arquivo [services/welcome-controller.js](services/welcome-controller.js) e siga os comentários.
- Entre no arquivo [test/unit/services/welcome.spec.js](test/unit/services/welcome.spec.js) e siga os comentários.
- Entre no arquivo [test/acceptance/routes/welcome.spec.js](test/acceptance/routes/welcome.spec.js) e siga os comentários.
- Rode `npm test` e verifique a saída do terminal. Você deve obter um resultado semelhante a esse:

```sh
> nodejs-boilerplate@0.1.0 test b2wads-welcome
> jest --coverage

 PASS  test/acceptance/routes/welcome.spec.js
 PASS  test/acceptance/routes/healthcheck.spec.js
 PASS  test/unit/services/welcome.spec.js
 PASS  test/unit/services/healthcheck.spec.js
|----------------------------|----------|----------|----------|----------|-------------------|
|File                        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
|----------------------------|----------|----------|----------|----------|-------------------|
|All files                   |      100 |      100 |      100 |      100 |                   |
| b2wads-welcome             |      100 |      100 |      100 |      100 |                   |
|  app.js                    |      100 |      100 |      100 |      100 |                   |
| b2wads-welcome/controllers |      100 |      100 |      100 |      100 |                   |
|  healthcheck-controller.js |      100 |      100 |      100 |      100 |                   |
|  welcome-controller.js     |      100 |      100 |      100 |      100 |                   |
| b2wads-welcome/helpers     |      100 |      100 |      100 |      100 |                   |
|  messages.js               |      100 |      100 |      100 |      100 |                   |
| b2wads-welcome/routes      |      100 |      100 |      100 |      100 |                   |
|  healthcheck.js            |      100 |      100 |      100 |      100 |                   |
|  index.js                  |      100 |      100 |      100 |      100 |                   |
|  welcome.js                |      100 |      100 |      100 |      100 |                   |
| b2wads-welcome/services    |      100 |      100 |      100 |      100 |                   |
|  healthcheck-service.js    |      100 |      100 |      100 |      100 |                   |
|  welcome-service.js        |      100 |      100 |      100 |      100 |                   |
|----------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.174s
Ran all test suites.
```

- Acesse [http://localhost:3000/welcome](http://localhost:3000/welcome) e veja o resultado
- Faça commit das suas alterações personalizando sua mensagem. [Saiba mais](https://git-scm.com/book/pt-br/v1/Git-Essencial-Gravando-Altera%C3%A7%C3%B5es-no-Reposit%C3%B3rio):

```sh
git commit -am "<minha mensagem personalizada>"
```

- Faça deploy da sua aplicação em ambiente de homologação com Asgard (peça ajuda do time)
- Remova sua aplicação do ambiente de homologação após testar a rota `/welcome`

### Scripts

- `start`: Inicializa a app
- `test`: Roda todos os testes
- `test:unit`: Roda os testes unitários
- `test:integration`: Roda os testes de integração
- `test:acceptance`: Roda os testes de aceitação
