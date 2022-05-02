const request = require('supertest')
const ApiUrl = "http://localhost:3000"

describe('Teste de rota', () => {
    
    // TESTES DO READ (GET)
    test('TESTANDO ROTA DE LEITURA DE FORNECEDORES', () => {
        return request(ApiUrl).get('/fornecedor')
        .then((response) => {
            expect(response.statusCode).toBe(200)
        })
    })

    test('TESTANDO ROTA DE LEITURA DE FORNECEDORES COM FILTRO DO ID', ()=>{
        return request(ApiUrl).get('/fornecedor/:id')
        .then ((response) => {
            expect (response.statusCode).toBe(200)
        })
    })


    // TESTE DO CREATE (POST)
    test('TESTANDO ROTA DE CRIAÇÃO DE FORNECEDORES', () => {
        return request (ApiUrl).post('/fornecedor')
        .then((response) => {
            expect(response.statusCode).toBe(200)
        })
    })


    // TESTE DO UPDATE (PUT)
    test('TESTANDO ROTA DE ATUALIZAÇÃO DE FORNECEDORES', () => {
        return request (ApiUrl).put('/fornecedor/:id')
        .then((response) => {
            expect(response.statusCode).toBe(200);
        })
    })

    // TESTE DO DELETE (DELETE)
    test('TESTANDO ROTA DE EXCLUSÃO DE REGISTRO DE FORNECEDORES', () => {
        return request (ApiUrl).delete('/fornecedor/:id')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })
})