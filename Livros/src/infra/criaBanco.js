const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Livros/src/infra/database.db');

//==== Livros
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(64),
    "AUTOR" varchar (64),
    "SINOPSE" varchar (2000),
    "CATEGORIA" varchar (64),
    "EDICAO" varchar (24),
    "QTDPAGINAS" INTEGER,
    "ID_FK_FORNECEDORES" INTEGER,
    "NOME_FK_FORNECEDORES" varchar (64),
    "PRECO" DECIMAL,
    "ISBN" varchar(13),
    "AVALIACAO" DECIMAL
  );`;

const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (ID, TITULO, AUTOR, SINOPSE, CATEGORIA, EDICAO, QTDPAGINAS, ID_FK_FORNECEDORES, NOME_FK_FORNECEDORES, PRECO, ISBN, AVALIACAO)
VALUES 
    (1, 'Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'teste sinopse', 'Fantasia de Ação e Aventura', '1ª Edição', 208, 2, 'Editora Rocco', 24.90, "9788532530783", 4.9),
    (2, 'Mulheres que correm com os lobos', 'Clarissa Pinkola Estés', 'teste sinopse 2', 'Inspiradores', '1ª Edição', 576, 2, 'Editora Rocco', 34.90, "9788532529787", 4.8),
    (3, 'A coragem de ser imperfeito', 'Brené Brown', 'teste sinopse 3', 'Motivacional Auto-Ajuda', '1ª Edição', 208, 3, 'Editora Sextante', 29.90, "9788543104331", 4.8)
`

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de livros");
    });
}


function preencheTabelaLivros() {
    db.run(ADD_LIVROS_DATA, (error) => {
        if (error) console.log("Erro ao preencher tabela de livros");
    });
}

db.serialize (() => {
    criaTabelaLivros();
    preencheTabelaLivros();
});