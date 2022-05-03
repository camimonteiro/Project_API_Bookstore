//const res = require('express/lib/response')
const bd = require('../infra/sqlite-db')
const Funcionario = require('../models/funcionario-model')
const FuncionarioDAO = require('../DAO/funcionario-DAO')

const funcionario = (app, bd) =>{
    const DAOFuncionario = new FuncionarioDAO(bd)

    // CREATE DO CRUDO - INSERE REGISTROS
    app.post('/funcionario', (req, res) =>{
        const body = req.body
        const FuncionarioDado = new Funcionario(body.nome, body.sobrenome, body.matricula, body.senha)
        const data = async() =>{
            try{
                const funcionarios = await DAOFuncionario.inserirFuncionarios(FuncionarioDado)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
            
        }
        data()
    })
    
    // READ DO CRUD - EXIBI REGISTROS
    app.get('/funcionario', (req, res) =>{
        const data = async() =>{
            try{
                const funcionarios = await DAOFuncionario.listarFuncionarios();
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
            
        }
        data()
    })

    // UPDATE DO CRUD - ATUALIZA REGISTROS
    app.put('/funcionario/:id', (req, res) =>{
        const body = req.body;
        const id = req.params.id
        const parametros = [body.nome, body.sobrenome, body.matricula, body.senha, id]
        const data = async() =>{
            try{
                const funcionarios = await DAOFuncionario.alterarFuncionarios(Parametros)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
            
        }
        data() 
    })

    // DELETE DO CRUD - DELETA REGISTROS
    app.delete('/funcionario/:id', (req, res) =>{
        const data = async() =>{
            try{
                const funcionarios = await DAOFuncionario.deletarFuncionarios(req.params.id)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
            
        }
        data() 
    })
}

module.exports = funcionario;