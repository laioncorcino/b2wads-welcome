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

describe("Test API", () => {

  it("Test return code 200 API", async () => {

    const res = await request(app).get("/welcome")

    expect(res.statusCode).toBe(200)

  })

  it("Test body API", async () => {

    const res = await request(app).get("/welcome")

    expect(res.body.firstName).toBe("Phil")
    expect(res.body.lastName).toBe("Monteiro")
    expect(res.body.age).toBe(30)
    expect(res.body.job).toBe("Developer")

  })

})



