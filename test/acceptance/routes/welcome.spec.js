const request = require('supertest')

const app = require('../../../app')

describe('Welcome test', () => {
  describe('GET /welcome', () => {
    let res

    beforeAll(async () => {
      res = await request(app).get('/welcome')
    })

    it('should return 200', () => {
      expect(res.status).toBe(200)
    })

    it('should return the newB', () => {
      expect(res.body).toMatchObject({
        nome: 'Victor Chiletto',
        cargo: 'Dev Jr',
        cargoReal: 'function(café): código',
        admissao: new Date('2020-04-06T09:00:00-04:00').toJSON(),
      })
    })
  })
})
