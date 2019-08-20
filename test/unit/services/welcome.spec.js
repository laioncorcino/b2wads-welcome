const {welcome} = require('../../../services/welcome-service');
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
describe("Welcome test", () => {
  describe("[SERVICE] welcome()", () => {
    it('return with json struture expected', async () => {
      //arrange
      const clienteExpected = {
        nome: "Raphael",
        sobrenome: "Fleury",
        idade: 24,
        cargo: "estagiario"
      };

      // Act
      client = await welcome();

      // Assert
      expect(clienteExpected).toStrictEqual(client);
      expect.assertions(1);
    })
  })
})

