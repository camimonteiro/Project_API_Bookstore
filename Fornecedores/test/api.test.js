const request = require('supertest')
const { describe } = require('yargs')
const ApiUrl = "http://localhost:3000"

describe('ApiUrl', () => {
    test('TESTANDO ROTA FORNECEDORES', () => {
        return request(ApiUrl).get('/fornecedor')
        .then((responde) => {
            expect(response.statusCode).toBe(200)
        })
    })
})