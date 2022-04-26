const express = require('express')
const routes = express.Router()

let db = [
  {'ID_' : {
  Vendedor: "Cecilia",
  Cliente: "Jose Leoncio",
  Datatime: 25/04/2022,
  Preco: "26.8",
  Name: "Harry Potter ",
  Escritor: "J. K. Rowling",
  Editora: "Bloomsbury Publishing Rocco Presença",
  Genero: "fantasia e ficção",
  Idioma: "Inglês",
  Paginas: "300",
  Ano: "1997"}},

  {'ID_2' : {
      Vendedor: "Benjamim",
      Cliente: "Maria Marruá",
      Datatime: 18/04/2022,
      Preco: "20.88",
      Name: "Querido John ",
      Escritor: "Nicholas Sparks",
      Editora: "Boden",
      Genero: "Suspense",
      Idioma: "Português",
      Paginas: "288",
      Ano: "2006"}},

      {'ID_3' : {
        Vendedor: "Benjamim",
        Cliente: "Maria Marruá",
        Datatime: 18/04/2022,
        Preco: "20.88",
        Name: "Querido John ",
        Escritor: "Nicholas Sparks",
        Editora: "Boden",
        Genero: "Suspense",
        Genero: "Suspense",
        Idioma: "Português",
        Paginas: "288",
        Ano: "2006"
    }}
] 




  module.exports = routes