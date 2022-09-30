import { Router } from 'express';

import { salvarProduto } from '../repository/produtoRepository.js';
import { validarProduto } from '../service/produtoValidacao.js';

const server = Router();

server.post('/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

        await validarProduto(produto)
        console.log(produto)

        const r = await salvarProduto(produto);
        resp.status(204).send();

    } catch (err) {
            resp.status(400).send({
                erro:err.message
        })
    }
})



export default server;