import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema(
    {
    id: {type: String},
    Livro: {type: String, required: true},
    Vendedor: {type: String, required: true},
    Cliente: {type: String, required: true},
    Datatime: {type: Number},
    Price: {type: Number},
    Autor: {type: String, required: true},
    Editora: { type: String, required: true},
    Genêro: {type: String, required: true},
    Idioma: {type: String, required: true},
    numeroPaginas: {type: Number},
    Ano: {type: Number},
    Fornecedor: {type: String, required: true}
}
);

const vendas= mongoose.model('vendas', vendaSchema);

export default vendas;