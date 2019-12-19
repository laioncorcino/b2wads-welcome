const supertest = require("supertest")

const app = require('../../../app')

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

describe('welcome routes', () => {
  describe('/welcome', () => {
    it('should return status 200 and a valid object', async () => {
      const res = await supertest(app).get('/welcome')

      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('name')
      expect(res.body).toHaveProperty('nickname')
      expect(res.body).toHaveProperty('age')
      expect(res.body).toHaveProperty('team')
      expect(res.body).toHaveProperty('skills')
    })
  })

  describe('/examle', () => {
    it('should return 404', async () => {
      const res = await supertest(app).get('/example')

      expect(res.status).toEqual(404)
    })
  })
})
