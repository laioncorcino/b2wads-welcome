const welcomeService = require('../../../services/welcome-service');
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

it('retorna dados newB', async () => {
  expect((await welcomeService.welcome())).toMatchObject({
    nome: "Isabella Cunha",
    idade: 23,
    curso: "Sistemas de Informacao",  
    universidade: "UFF",
    periodo: "6",
  });
});