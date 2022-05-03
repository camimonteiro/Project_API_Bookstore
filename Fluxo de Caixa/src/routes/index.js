import express from "express";
import vendas from "../routes/vendasRoutes.js";
import aluguel from "../routes/aluguelRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: "Bem vindos ao Fluxo de Caixas Da Livraria"})
 });

app.use(
    express.json(),
    vendas,
    aluguel
)
}


export default routes;

