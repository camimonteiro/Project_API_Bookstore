const express = require('express');
const app = express();
const cors = require('cors')

//PARA IMPORTAR O BANCO DE DADOS
const bd = require('./infra/sqlite-db');
app.use(cors())

//PARA IMPORTAR OS CONTROLLERS
const Fornecedor = require('./controllers/fornecedor-controller')

app.use(express.json())

Fornecedor(app, bd)

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})