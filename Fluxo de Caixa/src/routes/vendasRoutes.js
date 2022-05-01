import express from "express"
import VendaController from "../Controllers/vendasController.js";

const router = express.Router();

router
    .get("/vendas", VendaController.listarVendas)
    .get("/vendas:id", VendaController.listarVendasId)
    .post("/vendas", VendaController.cadastrarVendas)
    .put("/vendas/:id", VendaController.atualizarVendas)
    .delete("/vendas/:id", VendaController.excluirVendas)

export default router;

