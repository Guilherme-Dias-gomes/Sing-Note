import { BuscarProdutoPorCategoria, listarCategoria } from "../../repository/admin/categoriaRepository.js";

import { Router } from "express";
const server = Router()

server.get('/produto/categoria', async (req, resp) => {
    try {
        const r = await listarCategoria()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/usuario/produtos/buscar/categoira', async(req, resp) => {
    try {

        const { id } = req.query
        const resposta = await BuscarProdutoPorCategoria(id)

        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

export default server