const express = require ('express');
const app = express(); 
const port = 3000;

const FuncionariosController = require('./controllers/funcionarios-controller')
FuncionariosController (app)

//rodar o servidor na porta
app.listen(port, () => console.log(`Rodando na porta ${port}`))