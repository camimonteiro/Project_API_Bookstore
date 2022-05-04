require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// para ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas da API
const fornecedorRoutes = require('./routes/fornecedorRoutes')

app.use('/fornecedor', fornecedorRoutes)

//  rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Seja bem-vinde à Macabéa Livraria!' })
})

// entregando uma porta no MongoDB-Mongoose
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apimacabea.lb6i7.mongodb.net/apiMacabea`,
  )
  .then(() => {
    console.log('Conectou ao banco da Macabéa Livraria!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))