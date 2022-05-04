
const Funcionario = require('../models/funcionario-model')
const FuncionarioDAO = require('../DAO/funcionario-DAO')
const funcionario = (app, bd) =>{
    const DAOFuncionario = new FuncionarioDAO(bd)
    // CREATE DO CRUD - INSERE REGISTRO
    app.post('/funcionario', (req, res) =>{
        const body = req.body
        const FuncionarioDado = new Funcionario(body.nome, body.sobrenome, body.matricula, body.senha)
        const data = async () => {
            try{
                const funcionarios = await DAOFuncionario.inserirFuncionario(FuncionarioDado)
                res.send(funcionarios)
            }catch(err) {
                console.log(err)
                res.send(err)
            }
            
        }
        data()
    })

    // READ DO CRUD - EXIBI REGISTRO
    app.get('/funcionario', (req, res) =>{
        const data = async () => {
            try{
                const funcionarios = await DAOFuncionario.listarFuncionario()
                res.send(funcionarios)
            }catch(err) {
                res.send(err)
            }
            
        }
        data()        
    })

    // UPDATE DO CRUD - ATUALIZA REGISTRO
    app.put('/funcionario/:id', (req, res) =>{
        const body = req.body;
        const id = req.params.id
        const parametros = [body.nome, body.sobrenome, body.matricula, body.senha, id]
        const data = async () => {
            try{
                const funcionarios = await DAOFuncionario.alterarFuncionario(parametros)
                res.send(funcionarios)
            }catch(err) {
                res.send(err)
            }
            
        }
        data()        
    })

    // DELETE DO CRUD - DELETA REGISTRO
    app.delete('/funcionario/:id', (req, res) =>{
        const data = async () => {
            try{
                const funcionarios = await DAOFuncionario.deletarFuncionario(req.params.id)
                res.send(funcionarios)
            }catch(err) {
                res.send(err)
            }
            
        }
        data()
        
    })
}

module.exports = funcionario;