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
        // create client search
        const name = req.params.name;
        const clientFoundIndex = db.clients.findIndex(client => client.name === name)
        const clientFound = db.clients[clientFoundIndex]
        // don't forget automated testing
        res.send(clientFound)
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
            res.json({"Error": error.message})
        }
        
    })

    // Update client
    app.put('/clients/:name', (req, res) => {
        const body = req.body;
        const name = req.params.name;
         // search match for parameter
         const indexClient = db.clients.findIndex(client => client.name == name)
 
         if (indexClient > -1) {
             // storages old client data for reference
             const oldClientData = db.clients[indexClient];

            // stores data from requisition; 
            // if certain field doesn't exist, then it keeps the old data.
             const newClientData = new Client (
                 body.name || oldClientData.name,
                 body.cpf || oldClientData.cpf,
                 body.email || oldClientData.email,
                 body.address || oldClientData.address,
                 oldClientData.id
             )

             const updatedClient = db.clients.splice(indexClient,1,newClientData)

             res.json({"Updated client": newClientData})
         } else {
             res.json({"Updated client": "Name not found"})
         }
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