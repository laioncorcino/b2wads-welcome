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

describe("WelcomeService [Unit]", () => {
  describe("welcome()", () => {

    test("should return newB", async () => {
      const newB = await welcomeService.welcome()

      expect(newB).toMatchObject({
        name: "Laion Corcino Faria",
        email: "laion.faria@b2wdigital.com",
        cel: "21 993460699",
        college: "Sistemas de Informação - UFF",
        job: "Software Developer Intern",
        like: ["Read", "Watch baskteball", "Play instruments"]
      })
    })
  })
})