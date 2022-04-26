// Importing Client model
const Client = require('../models/clients-model')

// Exporting
const clients = (app, db) => {
    // Shows clients list
    app.get('/clients', (req, res) => {
        res.json({"Clients": db.clients})
    })

    // Search for individual client by name
    app.get('/clients/:name', (req, res) => {
        // show client's name
        // create client search
        res.send(req.params.name)
    })

    // Insert new client
    app.post('/clients', (req, res) => {

        try {
            // requisition body shortcut
            let body = req.body;

            // get new client info (example)
            const newClient = new Client(body.name, body.cpf, body.email, body.address);
            
            // anexing to the emulated database
            db.clients.push(newClient);

            // Gives new user as a response
            res.json({"New user": newClient})
        } catch(error) {
            res.json({"message": error.message})
        }
        
    })

    // Update client
    app.put('/clients', (req, res) => {
        res.send("Atualizar usuario")
    })

    // Update client
    app.delete('/clientes', (req, res) => {
        res.send("Deletar usuario")
    })
}

module.exports = clients;