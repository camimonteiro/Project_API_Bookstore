const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./src/infra/database.db')

module.exports = bd;