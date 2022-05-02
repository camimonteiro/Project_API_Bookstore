const bd = require('../infra/sqlite-db')
const Fornecedor = require('../models/fornecedor-model')
const FornecedorDAO = require('../DAO/fornecedor-dao')

const fornecedor = (app, bd) =>{
    const DAOFornecedor = new FornecedorDAO(bd)
    
// CREATE DO CRUD - PARA INSERIR REGISTRO DO FORNECEDOR
    app.post('/fornecedor', (req, res) =>{
        const body = req.body
        const FornecedorDado = new Fornecedor(body.categoria, body.razaosocial, body.nomefantasia, body.cnpj, body.endereco, body.email, body.telefone, body.status)
        const data = async() => {
            try{
                const fornecedores = await DAOFornecedor.inserirFornecedor(FornecedorDado)
                res.send(fornecedores);            
            }catch(err) {
                res.send(err);
            }
        }
        data()
    })

// READ PARA CRUD - PARA EXIBIR O REGISTRO DO FORNECEDOR
    app.get('/fornecedor', (req,res) => {
        const data = async() => {
            try{
                const fornecedores = await DAOFornecedor.listarFornecedores();
                res.send(fornecedores)
            }catch(err) {
                res.send(err);
            }
        }
        data()
    })

// READ DO CRUD - PARA EXIBIR UM REGISTRO DE ACORDO COM O ID
    app.get('/fornecedor/:id', (req,res) => {
        const data = async() => {
            try {
                const fornecedores = await DAOFornecedor.listarFornecedorID(req.params.id);
                res.send(fornecedores)
            }catch(err){
                res.send(err)
            }
        }
        data()
    })

// UPDATE DO CRUD - PARA ALTERAR REGISTROS DE FORNECEDORES DE ACORDO COM O ID
    app.put('/fornecedor/:id', (req, res) => {
        const body = req.body
        const id = req.params.id
        const parametros = [body.categoria, body.razaosocial, body.nomefantasia, body.cnpj, body.endereco, body.email, body.telefone, body.status, id]
        const data = async() => {
            try{
                const fornecedores = await DAOFornecedor.atualizarFornecedor(parametros)
                res.send(fornecedores)
            }catch(err){
                res.send(err)
            }
        }
        data()

        
    })

//DELETE DO CRUD - PARA DELETAR OS DADOS DO FORNECEDOR DE ACORDO COM O ID
    app.delete('/fornecedor/:id', (req, res) => {
        const data = async () => {
            try{
                const fornecedores = await DAOFornecedor.deletarFornecedor(req.params.id)
                res.send(fornecedores)                
            }catch(err){
                res.send(err);
            }
        }
        data()
    })

}
module.exports = fornecedor;