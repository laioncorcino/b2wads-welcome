/**
 * Assim como você implementou os testes unitários,
 * agora é o momento de implementar os testes de aceitação da sua app.
 *
 * Você deverá enviar uma requisição para a rota `/welcome` e verificar se:
 *
 * - O status retornado (`req.status`) é igual a `200`
 * - O conteúdo retornado da request (`req.body`) é igual ao que você informou em `newB`
 * - Remover o caso de teste `should pass` abaixo 
 *
 * Utilizamos a biblioteca Jest para escrever nossos testes
 * Saiba mais em: https://jestjs.io/en/
 */

const request = require("supertest")
const app = require("../../../app")

describe("Welcome test [Acceptance]", () => {
  describe("GET /welcome", () => {
    let newB = undefined

    beforeAll(async () => {
      newB = await request(app).get("/welcome")
    })

    it("should return 200", () => {
      expect(newB.status).toBe(200)
    })

    it("should return { name: 'Laion Corcino Faria' }", () => {
      expect(newB.body).toHaveProperty("name", "Laion Corcino Faria")
    })

    it("should return { email: 'laion.faria@b2wdigital.com' }", () => {
      expect(newB.body).toHaveProperty("email", "laion.faria@b2wdigital.com")
    })

    it("should return { celular: '21 993460699' }", () => {
      expect(newB.body).toHaveProperty("cel", "21 993460699")
    })

    it("should return { college: 'Sistemas de Informação - UFF' }", () => {
      expect(newB.body).toHaveProperty("college", "Sistemas de Informação - UFF")
    })

    it("should return { job: 'Software Developer Intern' }", () => {
      expect(newB.body).toHaveProperty("job", "Software Developer Intern")
    })

    it("should return { like: '[Read, Watch baskteball, Play instruments]' }", () => {
      expect(newB.body).toHaveProperty("like", ["Read", "Watch baskteball", "Play instruments"])
    })
  })
})
