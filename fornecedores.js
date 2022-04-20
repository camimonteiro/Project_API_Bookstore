const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


//onde vamos manter os fornecedores
let fornecedores = [];

app.use(cors());

//configurando body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/fornecedor', (req, res) => {
    const fornecedor = req.body;

    console.log(fornecedor);
    fornecedores.push(fornecedor)

    res.send('Fornecedor adicionado ao banco de dados')
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}`));