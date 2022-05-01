class Livros {
    constructor(titulo, autor, sinopse, categoria, edicao, qtdPaginas, id_FK_Fornecedores, nome_FK_Fornecedores, preco, isbn, avaliacao){
        this.titulo = titulo;
        this.autor = autor;
        this.sinopse = sinopse;
        this.categoria = categoria;
        this.edicao = edicao;
        this.qtdPaginas = qtdPaginas;
        this.id_FK_Fornecedores = id_FK_Fornecedores;
        this.nome_FK_Fornecedores = nome_FK_Fornecedores; 
        this.preco = preco;
        this.isbn = this.validarISBN(isbn);
        this.avaliacao = avaliacao;
    }

    validarISBN(isbn){
        if (isbn.length === 13 ){
            return isbn;
        } else {
            throw new Error('ISBN code must have 13 numbers')
        }
    }
}

module.exports = Livros;