class FuncionarioDAO{
    constructor(bd){
        this.bd = bd;
    }

    listarFuncionario(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM FUNCIONARIOS`, (err, results) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    };

    inserirFuncionario(NovoFuncionario){
        return new Promise((resolve, reject) =>{
            this.bd.run(`INSERT INTO FUNCIONARIOS (NOME , SOBRENOME , MATRICULA , SENHA ) VALUES (?, ?, ?, ?)`, 
            [NovoFuncionario.nome, NovoFuncionario.sobrenome, NovoFuncionario.matricula, NovoFuncionario.senha], (error) =>{
                if(error){
                    reject(error);
                }else{
                    resolve("INSERIDO COM SUCESSO!")
                }
            })
        })
    }

    alterarFuncionario(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE FUNCIONARIOS SET NOME = ?, SOBRENOME = ?, MATRICULA = ?, SENHA = ? WHERE ID = ?`, Parametros, (error) =>{
                if(error){
                    console.log(error)
                    reject(error);
                }else{
                    resolve("ALTERADO COM SUCESSO!")
                }
            })
        })
    }

    deletarFuncionario(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM FUNCIONARIOS WHERE ID = ${id}`, (error) =>{
                if(error){
                    reject(error);
                }else{
                    resolve("DELETADO COM SUCESSO!")
                }
            })
        })
    }
}

module.exports = FuncionarioDAO;