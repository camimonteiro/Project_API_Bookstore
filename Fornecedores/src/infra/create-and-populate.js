const sqlite = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/ingra/database.db');

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CATEGORIA" varchar(64),
    "RAZÃO SOCIAL" varchar(64),
    "NOME DE FANTASIA" varchar(64),
    "CNPJ" varchar(64),
    "ENDEREÇO" varchar (100),
    "EMAIL" varchar (64),
    "TELEFONE" varchar (64),
    "STATUS" varchar (64)
);`;

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (ID, CATEGORIA, RAZÃO SOCIAL, NOME DE FANTASIA, CNPJ, ENDEREÇO, EMAIL, TELEFONE, STATUS)
VALUES
    (1, 'Editora', 'Antofágica', 'Antofágica', '123.456.789/0001-80', 'Avenida Atlantica', 'prefeitura@antofagica.com.br', '21 98765-4321', 'em negociação'),
    (2, 'Editora', 'Rocco', 'Rocco', '987.654.321/0001-80', 'Avenida Atlantica', 'contato@rocco.com.br', '21 98888 1788', 'em negociação')
`

function criarTabelaFornecedor() {
    db.run(FORNECEDORES_SCHEMA, (error) => {
        if (error) concole.log("Erro ao criar tabela de fornecedores");
    });
}

function populaTabelaFornecedor(){
    db.run(ADD_FORNECEDORES_DATA, (error) =>{
        if(error) console.log("Erro ao popular tabela de fornecedores");
    });
}

db.serialize( () => {
    criaTabelaFornecedor();
    populaTabelaForncedor();
});