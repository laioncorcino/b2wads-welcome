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

describe('valida rotas', () => {
  it('retorna status 200', async () => {
    await request(app).get('/welcome').expect(200);
  });

  it('retorna objeto newB', async () => {
    await request(app).get('/welcome').expect({
      nome: "Isabella Cunha",
      idade: 23,
      curso: "Sistemas de Informacao",  
      universidade: "UFF",
      periodo: "6",
    });
  });
});