import express from "express";
import vendas from "../routes/vendasRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Entidade: "Fluxo de caixas"})
 });

app.use(
    express.json(),
    vendas
)
}


export default routes;

