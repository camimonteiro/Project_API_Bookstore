const express = require ('express')
const app = express();
const port = 3030;

// IMPORTANDO O CONTROLLER
const funcionario = require('./controllers/funcionario-controller')
// IMPORTANDO O BANCO
const bd = require('./infra/sqlite-db')

// IMPORTANDO O BODY-PARSER ATRAVES DO MIDDLWARE
app.use(express.json())

// CHAMANDO O CONTROLLER E PASSANDO O EXPRESS
funcionario(app, bd)

app.listen(port, () => console.log(`Rodando na porta ${port}`))