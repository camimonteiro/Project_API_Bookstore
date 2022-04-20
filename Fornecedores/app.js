const express = require('express');

const app = express();

const port = 3000;

app.get('/fornecedor', (req, res) => {
    res.json(fornecedor);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))