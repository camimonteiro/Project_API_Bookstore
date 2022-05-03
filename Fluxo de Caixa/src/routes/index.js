import express from "express";
import vendas from "../routes/vendasRoutes.js";
import aluguel from "../routes/aluguelRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Entidade: "Fluxo de caixas"})
 });

app.use(
    express.json(),
    vendas,
    aluguel
)
}


export default routes;

