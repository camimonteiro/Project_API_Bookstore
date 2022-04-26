const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


app.listen(3000, () =>{
    console.log(`Express started at http:://localhost:3000`)
})

 

//buscardados
 app.get('/', (req, res) => {
    return res.json(db)
  })

  //inserir dados
  app.post('/', (req,res) =>{
    const body = req.body
    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})
