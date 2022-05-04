const database = require('../models/clientes')

class ClienteController {
  static async mostraClientes(req, res){
    try {
      const todosOsClientes = await database.findAll();
      return res.status(200).json(todosOsClientes)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async mostraUmCliente(req, res) {
    const { id } = req.params
    try {
      const umCliente = await database.findOne( { 
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
      const novoClienteCriado = await database.create(novoCliente)
      return res.status(200).json(novoClienteCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCliente(req, res) {
    const novoCliente = req.body;
    const {id} = req.params;
    try {
      const novoClienteCriado = await database.update(novoCliente, {
        where: {
          id:id
        }
      })
      // retornar cliente atualizado
      return res.status(200).json(novoClienteCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaCliente(req, res) {
    // const clienteProcurado = req.body;
    const {id} = req.params;
    try {
      const clienteDeletado = await database.destroy({
        where: {
          id:id
        }
      })
      // retornar cliente atualizado
      return res.status(200).json(clienteDeletado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ClienteController;