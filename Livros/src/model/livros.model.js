var id = 0;
class Livros {
    constructor(titulo, autor, sinopse, categoria, edicao, qtdPaginas, idFornecedores, nomeFornecedores, preco, isbn, idClientes, avaliacao){
        this.id = ++id;
        this.titulo = titulo;
        this.autor = autor;
        this.sinopse = sinopse;
        this.categoria = categoria;
        this.edicao = edicao;
        this.qtdPaginas = qtdPaginas;
        this.idFornecedores = idFornecedores;
        this.nomeFornecedores = nomeFornecedores; 
        this.preco = preco;
        this.isbn = this.validarISBN(isbn);
        this.idClientes = idClientes;
        this.avaliacao = avaliacao;
    }

    validarISBN(isbn){
        if (isbn.length == 13 ){
            return isbn;
        } else {
            throw new Error('ISBN code must have 13 numbers')
        }
    }
}

module.exports = Livros;