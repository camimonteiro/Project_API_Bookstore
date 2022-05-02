const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;



app.post('/fornecedor', function (req, resp, next){
    resp.json({msg: 'Fornecedor inserido com sucesso!'})
})

app.use(express.json())

app.use(cors())

//IMPORTANDO OS CONTROLLERS DA ENTIDADE FORNECEDORES
const fornecedorController = require('./controllers/fornecedor-controller')

// IMPORTANDO OS MODELS DA ENTIDADE FORNECEDORES
const fornecedorModel = require('./models/fornecedor-model')

//IMPORTANDO O BANCO DE DADOS DA ENTIDADE FORNECEDORES
const bdSqlite = require('./infra/sqlite-db')

fornecedorController(app, bdSqlite)

app.listen(port, ()=>{
    console.log("Servidor da Livraria Macabéa rodando na porta 3000")
})