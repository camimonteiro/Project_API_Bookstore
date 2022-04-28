class FornecedorDAO{
    constructor(bd){
        this.bd = bd
    }

    listarFornecedor(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM FORNECEDORES', (error, rows) =>{
                if(error){
                    reject({ "ERRO": error.message })
                }else{
                    resolve({"fornecedores": rows, "count": rows.length})
                }
            })
        })
    }

    inserirFornecedor(novoFornecedor){
    return new Promise((resolve, reject)=>{
        this.bd.run(`INSERT INTO FORNECEDORES ( CATEGORIA, RAZÃO_SOCIAL, NOME_DE_FANTASIA, CNPJ, ENDEREÇO, EMAIL, TELEFONE, STATUS) VALUES (?,?,?)`,
        [novoFornecedor.razaosocial, novoFornecedor.nomedefantasia, novoFornecedor.cnpj, novoFornecedor.endereco, novoFornecedor.email, novoFornecedor.status],
        (error)=>{
            if (error) {
                console.log('reject');
                reject('Fornecedor não pôde ser inserido')
            }else {
                console.log('resolved');
                resolve('Forncederor inserido com sucesso')
            }
        })        
    })
}

    deletarFornecedor(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM FORNECEDORES WHERE ID=${id}`,
            (error) => {
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