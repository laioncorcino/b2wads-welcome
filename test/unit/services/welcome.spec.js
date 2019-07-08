const WelcomeService = require ("../../../services/welcome-service")
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

test('retorno do service welcome', async () => {
    const name = await WelcomeService.welcome()
    expect(name).toEqual({name: 'stag'})
  })