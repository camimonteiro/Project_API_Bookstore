const express = require ('express');
const app = express();
const port = 3000;

// Body-parse
app.use(express.json());

// Rodando o servidor na porta indicada
app.listen(port, function() {
    console.log('Online! rodando na porta 3000')
})