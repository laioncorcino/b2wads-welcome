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
    it('should pass when the object returned has the properties specified', async () => {
      const result = await welcomeService.welcome();

      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('nickname')
      expect(result).toHaveProperty('age')
      expect(result).toHaveProperty('team')
      expect(result).toHaveProperty('skills')

      expect(result).toMatchObject({
        name: 'Igor Assuncao',
        nickname: 'Igor Bom / Igor Princeso',
        age: 23,
        team: 'Afiliados',
        skills: ['Node.Js', 'Python', 'Docker']
      })
    })
  })
})
