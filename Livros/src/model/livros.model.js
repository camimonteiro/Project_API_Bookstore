var id = 0;
class Livros {
    constructor(titulo, autor, sinopse, categoria, idFornecedores, nomeFornecedores, preco, isbn, idClientes, avaliacao){
        this.id = ++id;
        this.titulo = titulo;
        this.autor = autor;
        this.sinopse = sinopse;
        this.categoria = categoria;
        this.idFornecedores = idFornecedores;
        this.nomeFornecedores = nomeFornecedores; 
        this.preco = preco;
        this.isbn = this.validarISBN(isbn);
        this.idClientes = idClientes;
        this.avaliacao = avaliacao;
    }

    // validarISBN(isbn){
    //     if (password.length <= 5){
    //         return password;
    //     } else {
    //         throw new Error('Password must be up to 5 characters')
    //     }
    // }
}

module.exports = Livros;