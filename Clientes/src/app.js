const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Including JSON parsing from Express
app.use(bodyParser.json())

// Importing emulated database
const db = require('./infra/db');

// Importing clients
const clients = require('./controllers/clients-controller')
clients(app, db)

app.listen(port, () => {
    console.log(`Using port ${port}`)
})
