import { openDb } from '../../src/infra/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Fornecedor ( id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, nome VARCHAR, cnpj INTEGER, endereco VARCHAR, email VARCHAR, contato VARCHAR, situacao TEXT, criado DATETIME)')
    })
};

export async function insertFornecedor(fornecedor){
    openDb().then(db=>{
        db.run('INSERT INTO Fornecedor ( tipo, nome, cnpj, endereco, email, contato, situacao, criado) VALUES (?.?)', [fornecedor.tipo, fornecedor.nome, fornecedor.cnpj, fornecedor.endereco, fornecedor.email, fornecedor.contato, fornecedor.situacao, fornecedor.criado]);
    });
}

export async function updateFornecedor(fornecedor){
    openDb().then(db=>{
        db.run('UPDATE Fornecedor SET tipo=?, nome=?, cnpj=?, endereco=?, email=?, contato=?, situacao=?, criado=? WHERE id=?', [fornecedor.tipo, fornecedor.nome, fornecedor.cnpj, fornecedor.endereco, fornecedor.email, fornecedor.contato, fornecedor.situacao, fornecedor.criado, fornecedor.id]);
    });
}

