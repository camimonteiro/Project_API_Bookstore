import express from "express"; 

const app = express();

const vendas = [
    {'ID_' : {
        Vendedor: "Cecilia",
        Cliente: "Jose Leoncio",
        Datatime: "25/04/2022",
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
            Datatime: "18/04/2022",
            Preco: "20.88",
            Name: "Querido John ",
            Escritor: "Nicholas Sparks",
            Editora: "Boden",
            Genero: "Suspense",
            Idioma: "Português",
            Paginas: "288",
            Ano: "2006"}},

            {'ID_3' : {
                Vendedor: "Phelipe Souza",
                Cliente: "Irma Novaes",
                Datatime: "13/04/2022",
                Preco: "234,58",
                Name: "Amor e outras Drogas ",
                Escritor: "Jheniffer",
                Editora: "Martinlia",
                Genero: "Romance",
                Idioma: "Inglês",
                Paginas: "178",
                Ano: "2010"}},
            
]

app.get('/', (req,res) => {
    res.status(200).send('curso');
})

app.get('/vendas', (req,res) => {
    res.status(200).json(vendas)
})





export default app