class Livros {
    constructor(titulo, autor, sinopse, categoria, edicao, qtdPaginas, id_FK_Fornecedores, nome_FK_Fornecedores, preco, ISBN, avaliacao){
        this.titulo = titulo;
        this.autor = autor;
        this.sinopse = sinopse;
        this.categoria = categoria;
        this.edicao = edicao;
        this.qtdPaginas = qtdPaginas;
        this.id_FK_Fornecedores = id_FK_Fornecedores;
        this.nome_FK_Fornecedores = nome_FK_Fornecedores; 
        this.preco = preco;
        this.ISBN = this.validarISBN(ISBN);
        this.avaliacao = avaliacao;
    }

    validarISBN(ISBN){
        if (ISBN.length >= 12){
            return ISBN;
        } else {
            throw new Error('O código ISBN deve ter 13 números')
        }
    }
}

module.exports = Livros;