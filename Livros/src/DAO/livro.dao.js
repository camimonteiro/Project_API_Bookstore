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

    // corrigir função abaixo:
    // inserirLivros() {
    //     return new Promise((resolve, reject) => {
    //         const body = req.body;
    //         const newLivro = new Livro (body.name, body.lastName, body.age, body.email, body.password);
    //         this.bd.run(`INSERT INTO USERS (NAME, LASTNAME, AGE, EMAIL, PASSWORD) VALUES (?,?,?,?,?)`,
    //             [newUser.name, newUser.lastName, newUser.age, newUser.email, newUser.password], (error) => {
    //                 if (error) {
    //                     reject('ERROR IN ENTERING DATA INTO THE DATABASE')
    //                 } else {
    //                     resolve('DEU CERTO INSERIR')
    //                 }
    //             })
    //     })
    // }

    deleteUsers() {

    }

    changeUsers() {

    }
}

module.exports = LivroDAO;