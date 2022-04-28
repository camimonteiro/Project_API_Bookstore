const fornecedor = (app, bd) => {
    //CREATE DO CRUD PARA INSERIR OS FORNECEDORES NO APP
    app.post('/fornecedor', (req, res) => {
        res.send("Aqui rota da entidade fornecedor POST VERBO HTTP")
    })
    //READ DO CRUD PARA EXIBIR O REGISTRO DO FORNECEDORE
    app.get('/fornecedor', (req,res) => {
        res.send("Aqui rota da entidade fornecedor GET VERBO HTTP")
    })
    //UPDATE DO CRUD PARA ALTERAR O REGISTRO DO FORNECEDOR
    app.put('/fornecedor', (req, res) => {
        res.send("Aqui rota da entidade fornecedor PUT VERBO HTTP")
    })
    app.delete('./fornecedor', (req, res) => {
        res.send("Aqui rota da entidade fornecedor DELETE VERBO HTTP")
    })
}

module.exports = fornecedor;