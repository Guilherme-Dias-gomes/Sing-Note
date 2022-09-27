import { listarTipo } from "../repository/tipoRepository.js";

import { Router } from "express";
const SingNote = Router()

SingNote.get('/produto/tipo', async (req, resp) =>{
    try {
        const r = await listarTipo()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default SingNote;