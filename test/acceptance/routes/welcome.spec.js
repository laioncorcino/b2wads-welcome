const request = require('supertest');
const app = require('../../../app');

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

 describe('Routes tests', () => {

  let response;

  beforeAll(async () => {
    response = await request(app).get('/welcome');
  })

  it('GET /welcome should return 200', async () => {
    expect(response.status).toEqual(200);
  });

   it('GET /welcome should return object created at WelcomeService', async () => {
     expect(response.body).toEqual({
        firstName: 'José',
        lastName: 'Lício',
        age: 24,
        fullName: 'José Lício'
      });  
   });

 });