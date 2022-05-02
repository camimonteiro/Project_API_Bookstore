class FornecedorDAO{
    constructor(bd){
        this.bd = bd
    }

    listarFornecedor(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM FORNECEDORES', (err, results) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }

    listarFornecedorID(id){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM FORNECEDORES WHERE ID=${id}`, (err, results)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }

    inserirFornecedor(novoFornecedor){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO FORNECEDORES ( CATEGORIA, RAZAOSOCIAL, NOMEFANTASIA, CNPJ, ENDEREÇO, EMAIL, TELEFONE, STATUS) VALUES (?,?,?,?,?,?,?,?)`,
            [novoFornecedor.razaosocial, novoFornecedor.nomefantasia, novoFornecedor.cnpj, novoFornecedor.endereco, novoFornecedor.email, novoFornecedor.status],(error)=>{
                if (error) {
                    reject(error)
                }else {
                    resolve('Fornecedor inserido com sucesso')
                }
            })        
        })
    }

    atualizarFornecedor(Parametros){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE FORNECEDORES SET CATEGORIA = ? , RAZAOSOCIAL = ? , NOMEFANTASIA = ? , CNPJ = ? , ENDERECO = ? , EMAIL = ? , TELEFONE = ? , STATUS = ? WHERE ID = ?`, Parametros , (error) => {
                if(error){
                    console.log(error)
                    reject(error);                    
                }else{
                    resolve("FORNECEDOR ALTERADO COM SUCESSO!")
                }
            })
        })
    }

    deletarFornecedor(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM FORNECEDORES WHERE ID=${id}`, (error) => {
                if(error) {
                    reject(error)
                }else {
                    resolve('Fornecedor deletado com sucesso')
                }
            })
        })
    }

}

module.exports = FornecedorDAO