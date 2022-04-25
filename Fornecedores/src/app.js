// import {openDB} from '../src/configDB.js';
import { createTable, insertFornecedor, updateFornecedor } from '../src/controller/fornecedor.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req,res){
    res.send("Bem-vindo a Livraria Macabeana!");
})

app.post('/fornecedor', function(req,res){
    insertFornecedor(req.body);
    res.json({
        "statusCode": 200
    })
})

app.put('/fornecedor', function(req,res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })
    }else{
        updateFornecedor(req.body);
        res.json({
            "statusCode": 200
        })
    }
});

app.listen(3000, ()=> console.log("Api Macabeana Rodando em http://localhost:3000"))