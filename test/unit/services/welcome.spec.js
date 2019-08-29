const WelcomeService = require('../../../services/welcome-service');

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

describe('Welcome Service', () => {
  it('Should return an object with properties firstName, lastName, age and fullName', async () => {
    const newB = await WelcomeService.welcome();
    expect(newB).toEqual({
      firstName: 'José',
      lastName: 'Lício',
      age: 24,
      fullName: 'José Lício'
    });
  });
})
