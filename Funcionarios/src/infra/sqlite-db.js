// ENCERRAR O BANCO QUANDO O SERVIDOR FOR FECHADO
const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./src/infra/database.db');

// PROCESSAMENTO DE SINAL
process.on('SIGINT', () =>
    bd.close( () => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;