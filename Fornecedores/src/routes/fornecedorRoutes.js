const router = require('express').Router()

const Fornecedor = require('../models/fornecedor-model')

//Create - criação de dados
router.post('/', async(req, res) => {
    const { categoria, razaoSocial, nomeFantasia, cnpj, endereco, cep, cidade, estado, email, telefone, status } = req.body
 
    if(!categoria){
        res.status(422).json({ error: 'O nome é obrigatório!'})
    }
  
    if(!razaoSocial){
      res.status(422).json({ error: 'A razão social é obrigatória!'})
  }
  
      if(!cnpj){
          res.status(422).json({ error: 'O cnpj é obrigatório!'})
      }
  
      if(!endereco){
          res.status(422).json({ error: 'O endereço é obrigatório!'})
      }
  
      if(!cep){
          res.status(422).json({ error: 'O cep é obrigatório!'})
      }
  
      if(!cidade){
          res.status(422).json({ error: 'A cidade é obrigatória!'})
      }
  
      if(!estado){
          res.status(422).json({ error: 'O estado é obrigatório!'})
      }
  
      if(!email){
          res.status(422).json({ error: 'O email é obrigatório!'})
      }
  
      if(!telefone){
          res.status(422).json({ error: 'O telefone é obrigatório!'})
      }
  
      if(!status){
          res.status(422).json({ error: 'O status é obrigatório!'})
      }
  
    const fornecedor = {
      categoria,
      razaoSocial,
      nomeFantasia,
      cnpj,
      endereco,
      cep,
      cidade,
      estado,
      email,
      telefone,
      status
    }
  
    try {
      await Fornecedor.create(fornecedor)
  
      res.status(201).json({ message: 'Fornecedor cadastrado no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

//   Read - leitura de dados
router.get('/', async (req,res) => {
    try{
        const fornecedores = await Fornecedor.find()

        res.status(200).json(fornecedor)
    }catch(error){
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async(req,res) => {
    const id = req.params.id

    try {
        const fornecedor = await Fornecedor.findOne({ _id: id })

        if(!fornecedor) {
            res.status(422).json({ message: 'O fornecedor não foi encontrado!'})
            return
        }

        res.status(200).json(fornecedor)
    }catch (error) {
     res.status(500).json({ error: error })
 }})

//  Update - atualização de dados (PUT, PATCH)
router.patch('/fornecedor/:id', async (req, res) => {
    const id = req.params.id
  
    const { categoria, razaoSocial, nomeFantasia, cnpj, endereco, cep, cidade, estado, email, telefone, status } = req.body
  
    const fornecedor = {
      categoria,
      razaoSocial,
      nomeFantasia,
      cnpj,
      endereco,
      cep,
      cidade,
      estado,
      email,
      telefone,
      status
    }
  
    try {
      const updatedFornecedor = await Fornecedor.updateOne({ _id: id }, fornecedor)
  
      if (updatedFornecedor.matchedCount === 0) {
        res.status(422).json({ message: 'Fornecedor não encontrado!' })
        return
      }
  
      res.status(200).json(fornecedor)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
router.delete('/fornecedor/:id', async (req, res) => {
    const id = req.params.id
  
    const fornecedor = await Fornecedor.findOne({ _id: id })
  
    if (!fornecedor) {
      res.status(422).json({ message: 'Fornecedor não encontrado!' })
      return
    }
  
    try {
      await Fornecedor.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Fornecedor removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router