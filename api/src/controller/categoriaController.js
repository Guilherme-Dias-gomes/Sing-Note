import { listarCategoria } from "../repository/categoriaRepository.js";

import { Router } from "express";
const server = Router()

server.get('/produto/categoria', async (req, resp) =>{
    try {
        const r = await listarCategoria()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server