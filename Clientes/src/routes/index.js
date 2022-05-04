const bodyParser = require('body-parser')
const clientes = require('./clientesRoute')

module.exports = app => {
  app.use(bodyParser.json())
  // app.get('/', (req, res) => {
  //   res.send('Olá! Entrou no API!')
  // })
  app.use(clientes)
}