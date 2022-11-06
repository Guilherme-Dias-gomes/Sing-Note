import { Router } from "express";
import { buscarTodosPedidos, buscarPedidosPorNome } from "../../repository/admin/adminStatusRepository.js";

const server = Router();

server.get('/buscar/pedido', async (req, resp) => {
    try {       

        const r = await buscarTodosPedidos()
        resp.send(r)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/buscar/pedido/buscar', async (req, resp) => {
    try {

        const { nome } = req.query;
        
        const r = await buscarPedidosPorNome(nome);
        resp.send(r)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server