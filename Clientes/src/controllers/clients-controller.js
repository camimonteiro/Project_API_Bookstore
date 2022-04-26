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
        // don't forget automated testing
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
    app.delete('/clients/:name', (req, res) => {
        
        // search match for parameter
        const name = req.params.name;
        const indexClient = db.clients.findIndex(client => client.name === name)

        if (indexClient > -1) {
            // deletes client from emulated database if index is found
            const deletedCLient = db.clients.splice(indexClient, 1)
            res.json({"Deleted client": deletedCLient})
        } else {
            res.json({"Deleted client": "Name not found"})
        }
        
    })
}

module.exports = clients;