const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router();

router.get('/clientes', ClienteController.mostraClientes)
router.get('/clientes/:id', ClienteController.mostraUmCliente)
router.post('/clientes', ClienteController.criaCliente)

module.exports = router;