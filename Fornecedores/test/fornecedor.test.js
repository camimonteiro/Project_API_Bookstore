const Fornecedor = require('../src/models/fornecedor-model')

test('Inserindo fornecedor', ()=>{
    expect(()=>{
        const novoFornecedor = new Fornecedor("editora", "ciadaescrita", "ciadaescrita", "111.111.111/0001-80", "rua do parque", "contato@ciadaescrita.com.br", "11 974228051", "ativa")
    }).toThrow()
})