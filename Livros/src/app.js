const express = require ('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Body-parse
app.use(express.json());
app.use(cors());

app.post('/livro', function (req, resp, next) {
    resp.json({msg: 'This is CORS-enabled for all origins!'})
  })

// Importando Controller
const livrosController = require('./controller/livros.controller');

// Importação do modelo criado
const livrosModel = require('./model/livros.model');

// Importando o banco de dados criado
const bd = require('./infra/sqlite-db');

livrosController(app, bd);

// Rodando o servidor na porta indicada
app.listen(port, function() {
    console.log('Online! rodando na porta 3000')
})

