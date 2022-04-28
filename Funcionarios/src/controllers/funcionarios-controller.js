module.exports = (app) =>{
    app.get('/funcionarios', function(req, res) {
        res.send('aqui são os valores dos funcionarios EXIBE/LER ARQUIVOS')
    })
    
    app.post('/funcionarios', function(req, res) {
        res.send = req.body;
    })
}
/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


//onde vamos manter os funcionarios
let funcionario = [];

app.use(cors());

//configurando body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/funcionario', (req, res) => {
    const funcionario = req.body;

    console.log(funcionario);
    funcionario.push(funcionario)

    res.send('Funcionario adicionado ao banco de dados')
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}`));*/