const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../src/infra/database.db');

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CATEGORIA" varchar(100),
    "RAZAOSOCIAL" varchar(100),
    "NOMEFANTASIA" varchar(100),
    "CNPJ" varchar(100),
    "ENDERECO" varchar (100),
    "EMAIL" varchar (100),
    "TELEFONE" varchar (100),
    "STATUS" varchar (100)
);`;

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (ID, CATEGORIA, RAZAOSOCIAL, NOMEFANTASIA, CNPJ, ENDERECO, EMAIL, TELEFONE, STATUS)
VALUES
    (1, 'Editora', 'Editora Antofágica Ltda', 'Antofágica', '32.193.802/0001-51', 'Rua Gildasio Amado, 55/1805, Barra da Tijuca, Rio de Janeiro, RJ, Cep 22631-020', 'rafael@antofagica.com.br', '+552132688725', 'ativa'),
    (2, 'Editora', 'Editora Rocco Ltda', 'Rocco', '42.444.703/0001-59', 'Rua Evaristo da Veiga, 65/1101, Centro, Rio de Janeiro, RJ, Cep 20031-040', 'contato@rocco.com.br', '+552125072244', 'ativa'),
    (3, 'Editora', 'Gmt Editores Ltda', 'Sextante', '02.310.771/0001-00','Voluntários da Patria, 45/1401, Botafogo, Rio de Janeiro, RJ, Cep 22270-000', 'helena@sextante.com.br', '+552125384100', 'ativa')
    (4, 'Editora', 'Editora Schwarcz S.A.', 'Grupo Companhia das Letras', '55.789.390/0008-99','Rua Bandeira Paulista, 702, cj. 32, Itaim Bibi, São Paulo, SP, Cep 04532-002', 'vendas@compahiadasletras.com.br', '+551137073500', 'em negociação')
`

function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (err) => {
        if (err) console.log("Erro ao criar tabela de fornecedores");
    });
}

function populaTabelaFornecedores(){
    db.run(ADD_FORNECEDORES_DATA, (error) =>{
        if(error) console.log("Erro ao popular tabela de fornecedores");
    });
}

db.serialize(() => {
    criaTabelaFornecedores();
    populaTabelaFornecedores();
});