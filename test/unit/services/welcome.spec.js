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

const welcomeService = require("../../../services/welcome-service")

describe("welcomeService", () => {

  describe("welcome", () => {

    it('Test welcome properties', async () => {

      let ws = await welcomeService.welcome()
    
      expect(ws.firstName).toBe("Phil")
      expect(ws.lastName).toBe("Monteiro")
      expect(ws.age).toBe(30)
      expect(ws.job).toBe("Developer")
    
    })    

  })

})

