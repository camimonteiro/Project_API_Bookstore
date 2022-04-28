const Fornecedor = require('../models/fornecedor-model')
const FornecedorDao = require('../DAO/usuario-dao')

const fornecedor = (app, bd) =>{
    let fornece = bd.fornecedores.products
const novoFornecedorDAO = new FornecedorDao(bd)

// CREATE DO CRUD - PARA INSERIR REGISTRO DO FORNECEDOR
app.post('/fornecedor', (req, res) =>{
    const body = req.body;
    const NovoFornecedor = new Fornecedor(body.categoria, body.razaosocial, body.nomedefantasia, body.cnpj, body.endereco, body.email, body.telefone, body.status)
    const data = async() => {
        try{
            novoFornecedorDAO.insereFornecedor(novoFornecedor);
            res.send(`Fornecedor inserido com sucesso`);            
        }catch(err) {
            res.send(err);
        }
    }
    data();
})

// READ PARA CRUD - PARA EXIBIR O REGISTRO DO FORNECEDOR
app.get('/fornecedor', (req,res) => {
    const data = async() => {
        try{
            const fornecedores = await novoFornecedorDAO.listarFornecedores();
            res.send(fornecedores)
        }catch(err) {
            res.send(err);
        }
    }
    data();
})

// READ DO CRUD - PARA EXIBIR UM REGISTRO - ROTA EXTRA PARÂMETROS
app.get('/fornecedor/:nomedefantasia', (req,res) => {
    res.json(req.params.nomedefantasia)
})

// UPDATE DO CRUD - PARA ALTERAR REGISTROS DE FORNECEDORES
app.put('/fornecedor/:nomedefantasia', (req, res) => {
    const nome = req.params.nomedefantasia;
    const body = req.body
    const IndexeFornecedor = bd.fornecedor.findIndex(fornecedor => fornecedor.nome === nome)

    if (IndexeFornecedor > -1){
        const DadoAntigoFornecedor = bd.fornecedor[IndexeFornecedor]
        const DadoNovoFornecedor = new Fornecedor(
            body.categoria || DadoAntigoFornecedor.categoria,
            body.razaosocial || DadoAntigoFornecedor.razaosocial,
            body.nomedefantasia || DadoAntigoFornecedor.nomedefantasia,
            body.cnpj || DadoAntigoFornecedor.cnpj,
            body.endereco || DadoAntigoFornecedor.endereco,
            body.email || DadoAntigoFornecedor.email,
            body.telefone || DadoAntigoFornecedor.telefone,
            body.status || DadoAntigoFornecedor.status,
            DadoAntigoFornecedor.id
        )
        const FornecedorAtualizado = bd.fornecedor.splice(IndexeFornecedor, 1, DadoNovoFornecedor)
        res.json({"FornecedorDeletado": FornecedorAtualizado})
    }else {
        res.json("FORNECEDOR NÃO ENCONTRADO NO BANCO")
    }
})

//DELETE DO CRUD - PARA BUSCAR OS DADOS DO FORNECEDOR QUE DESEJA DELETAR
app.delete('/fornecedor/:nomedefantasia', (req, res) => {
    const data = async () => {
        try{
            novoFornecedorDAO.deletaFornecedor(req.params.id);
            res.send(`Fornecedor deletado com sucesso`);
        }catch(err){
            res.send(err);
        }
    }
    data();
})

}
module.exports = fornecedor;