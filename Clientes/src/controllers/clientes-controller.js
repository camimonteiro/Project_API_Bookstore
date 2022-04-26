// Exporting
const clients = (app) => {
    // Shows clients list
    app.get('/clientes', (req, res) => {
        res.send('Lista de clientes')
    })

    // Search for individual client by name
    app.get('/clientes/:nome', (req, res) => {
        res.send('Busca de clientes por nome')
    })

    // Insert new client
    app.post('/clientes', (req, res) => {
        // pegar info do usuario e guardar
        // 
        res.send("INserir usuario")
    })

    // Update client
    app.put('/clientes', (req, res) => {
        res.send("Atualizar usuario")
    })

    // Update client
    app.delete('/clientes', (req, res) => {
        res.send("Deletar usuario")
    })
}

module.exports = clients;