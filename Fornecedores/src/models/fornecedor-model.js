const mongoose = require('mongoose')

const Fornecedor = mongoose.model('Fornecedor', {
    categoria: String,
    razaoSocial: String,
    nomeFantasia: String,
    cnpj: String,
    endereco: String,
    cep: String,
    cidade: String,
    estado: String,
    email: String,
    telefone: String,
    status: String,
})

module.exports = Fornecedor