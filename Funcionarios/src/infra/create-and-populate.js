// ESSE ARQUIVO E APENAS PARA CRIAR E POPULAR O BANCO DE DADOS
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const FUNCIONARIOS_SCHEMA =
`CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(20),
    "SOBRENOME" varchar(20),
    "MATRICULA" varchar(20),
    "SENHA"  varchar(20)
);`;

const ADD_FUNCIONARIOS_DATA = 
`INSERT INTO FUNCIONARIOS (ID, NOME, SOBRENOME, MATRICULA, SENHA) 
VALUES
    (1,	'Steffen', 'Bowton', '2005', '******'),
    (2,	'Dean',	'Innocenti', '1986',	'******'),
    (3,	'Derick', 'Messruther', '2010', '******')
    `

function criaTabelaUsr() {
    db.run(FUNCIONARIOS_SCHEMA, (error) =>{
        if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}

function populaTabelaUsr() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) =>{
        if (error) console.log("Erro ao popular tabela de funcionarios");
    });
}

db.serialize( () =>{
    criaTabelaUsr();
    populaTabelaUsr();
});