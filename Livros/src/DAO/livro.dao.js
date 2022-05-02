class LivroDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarLivros() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM LIVROS', (error, rows) => {
                if (error) {
                    reject('ERRO NA SELEÇÃO DO BANCO DE DADOS')
                } else {
                    resolve({'BANCO DE DADOS DISPONÍVEL - ENTIDADE LIVROS': rows})
                }
            })
        })
    }

    listarLivrosID(id) {
        return new Promise ((resolve, reject) => {
            this.bd.all(`SELECT * FROM LIVROS WHERE ID=${id}`, (error, results) =>{
                if (error) {
                    reject (error)
                } else {
                    resolve (results)
                }
            })
        })
    }

    inserirLivros(newLivro) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO LIVROS (TITULO, AUTOR, SINOPSE, CATEGORIA, EDICAO, QTDPAGINAS, ID_FK_FORNECEDORES, NOME_FK_FORNECEDORES, PRECO, ISBN, AVALIACAO) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
                [newLivro.titulo, newLivro.autor, newLivro.sinopse, newLivro.categoria, newLivro.edicao, newLivro.qtdPaginas, newLivro.id_FK_Fornecedores, newLivro.nome_FK_Fornecedores, newLivro.preco, newLivro.ISBN, newLivro.avaliacao], (error) => {
                    if (error) {
                        reject('ERRO NA INSERÇÃO DE DADOS NO BANCO DE DADOS')
                    } else {
                        resolve('DEU CERTO INSERIR')
                    }
                })
        })
    }

    deleteLivros(id) {
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM LIVROS WHERE ID=${id}`, (error) => {
                if (error) {
                    reject(error)
                } else {
                    resolve('Livro deletado com sucesso!')
                }
            })
        })
    }

    changeLivros(parametros) {
        return new Promise ((resolve, reject) => {
            console.log(parametros)
            this.bd.run(`UPDATE LIVROS SET TITULO = ?, AUTOR = ?, SINOPSE = ?, CATEGORIA = ?, EDICAO = ?, QTDPAGINAS = ?, ID_FK_FORNECEDORES = ?, NOME_FK_FORNECEDORES = ?, PRECO = ?, ISBN = ?, AVALIACAO = ? WHERE ID = ?`, parametros, (error) => {
                if (error) {
                    console.log(error)
                    reject (error);
                } else {
                    resolve ('Alterado com sucesso!')
                }
            })
        })
    }
}

module.exports = LivroDAO;