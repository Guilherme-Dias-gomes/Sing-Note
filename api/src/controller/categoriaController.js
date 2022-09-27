import { listarCategoria } from "../repository/categoriaRepository.js";

import { Router } from "express";
const SingNote = Router()

SingNote.get('/produto/categoria', async (req, resp) =>{
    try {
        const r = await listarCategoria()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default SingNote