class FuncionarioDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarFuncionarios(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM FUNCIONARIOS`, (err, results) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    inserirFuncionarios(NovoFuncionario){
        return new Promise((resolve, reject) =>{
            this.bd.run(`INSERT INTO FUNCIONARIOS (NOME, SOBRENOME, MATRICULA, SENHA) VALUES (?, ?, ?, ?)`,
            [NovoFuncionario.nome, NovoFuncionario.sobrenome, NovoFuncionario.matricula, NovoFuncionario.senha], (error) =>{
                if(error){
                    reject(error);
                }else{
                    resolve("Inserido com sucesso")
                }
            })
        })
    }    
    alterarFuncionarios(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE FUNCIONARIOS SET NOME = ?, SOBRENOME = ?, MATRICULA = ?, SENHA = ? WHERE ID = ?`, Parametros,(error) =>{
                if(error){
                    reject(error);
                }else{
                    resolve("Alterado com sucesso")
                }
            })
        })
    }
    deletarFuncionarios(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM FUNCIONARIOS WHERE ID = ${id}`, (error) =>{
                if(error){
                    reject(error);
                }else{
                    resolve("Deletado com sucesso")
                }
            })
        })
    }
}

module.exports = FuncionarioDAO;