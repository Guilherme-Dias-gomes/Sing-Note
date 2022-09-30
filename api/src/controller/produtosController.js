import { Router } from 'express';

import { salvarProduto } from '../repository/produtoRepository.js';
import { validarProduto } from '../service/produtoValidacao.js';

const server = Router();

server.post('/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

         await validarProduto(produto)

        const produtoInserido = await salvarProduto(produto);

        resp.send(produtoInserido);

    } catch (err) {
            resp.status(400).send({
                erro:err.message
        })
    }
})



export default server;