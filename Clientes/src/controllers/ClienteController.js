const database = require('../models')

class ClienteController {
  static async mostraClientes(req, res){
    try {
      const todosOsClientes = await database.Clientes.findAll()
      return res.status(200).json(todosOsClientes)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async mostraUmCliente(req, res) {
    const { id } = req.params
    try {
      const umCliente = await database.umCliente.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umCliente)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaCliente(req, res) {
    const novoCliente = req.body
    try {
      const novoClienteCriado = await database.Clientes.create(novoCliente)
      return res.status(200).json(novoClienteCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ClienteController;