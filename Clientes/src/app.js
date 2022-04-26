const express = require('express')
const app = express()
const port = 3000

// Importing clients
const clients = require('./controllers/clientes-controller')
clients(app)

app.listen(port, () => {
    console.log(`Online na porta ${port}`)
})
