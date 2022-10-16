import { Router } from "express";
import { buscarProdutoImagens, BuscarProdutoPorId } from "../repository/produtoRepository.js";
const server = Router()

import multer from 'multer'

const upload = multer({ dest:'storage/produto' })

server.get('/api/produto/:id', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;

        const produtos = await BuscarProdutoPorId(id);
        const imagens = await buscarProdutoImagens(id);

        resp.send({
            info: produtos,
            imagens: imagens
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server