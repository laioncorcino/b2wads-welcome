/**
 * Agora você irá implementar os testes unitários da sua app.
 *
 * Você deverá validar se:
 *
 * - o Método `welcome()` em `services/welcome-service.js` está
 *   retornando o que você configurou no objeto `newB`
 * - Remover o caso de teste `should pass` abaixo
 *
 * Utilizamos a biblioteca Jest para escrever nossos testes
 * Saiba mais em: https://jestjs.io/en/
 */

const welcomeService = require('../../../services/welcome-service');

test('teste service', async () => {
  const data = {
    "Nome ": "Jonatas Rodrigues",
    "Idade ":"32",
    "Cargo ":"Desenvolvedor"
  }
  const response = await welcomeService.welcome();
  expect(data).toStrictEqual(response);
});

