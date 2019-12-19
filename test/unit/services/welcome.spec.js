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

const welcomeService = require('../../../services/welcome-service')

describe('welcomeService', () => {
  describe('welcome()', () => {
    it('should pass when the object returned has all the properties specified and is equals to specified', async () => {
      const welcomeResult = await welcomeService.welcome()

      expect(welcomeResult).toHaveProperty('name')
      expect(welcomeResult).toHaveProperty('nickname')
      expect(welcomeResult).toHaveProperty('age')
      expect(welcomeResult).toHaveProperty('team')
      expect(welcomeResult).toHaveProperty('skills')
      
      expect(welcomeResult).toMatchObject({
        name: 'Igor Assuncao',
        nickname: 'Igor Bom / Igor Princeso',
        age: 23,
        team: 'Afiliados',
        skills: ['Node.Js', 'Python', 'Docker']
      })
    })
  })
})
