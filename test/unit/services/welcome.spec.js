const WelcomeService = require('../../../services/welcome-service')

describe('WelcomeService', () => {
  describe('welcome()', () => {
    it('should return the newB', async () => {
      const result = await WelcomeService.welcome()

      expect(result).toMatchObject({
        nome: 'Victor Chiletto',
        cargo: 'Dev Jr',
        cargoReal: 'function(café): código',
        admissao: new Date('2020-04-06T13:00:00Z'),
      })
    })
  })
})
