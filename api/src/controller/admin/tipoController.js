import { BuscarProdutoPorTipo, listarTipo } from "../../repository/admin/tipoRepository.js";

import { Router } from "express";
const server = Router()

server.get('/produto/tipo', async (req, resp) =>{
    try {
        const r = await listarTipo()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/usuario/produtos/buscar/tipo', async (req, resp) =>{
    try {

        const { id } = req.query
        const resposta = await BuscarProdutoPorTipo(id)
        

        resp.send(resposta)
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

export default server;