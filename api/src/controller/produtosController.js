import { Router } from 'express';
import { salvarProduto } from '../repository/produtoRepository.js';

const server = Router();



server.post('/login/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

        if(!produto.nome) 
            throw new Error ('❌Nome do produto do Produto obrigatório');

        if(!produto.modelo.trim()) 
            throw new Error ('❌Modelo do produto não foi preenchido');

        if(!produto.descricao.trim()) 
            throw new Error ('❌Nome do plano é obrigatório');

        if(!produto.estoque.trim()) 
            throw new Error ('❌CPF é obrigatório');

        if(!produto.marca.trim()) 
            throw new Error ('❌Gênero é obrigatório');

        if(!produto.preco.trim()) 
            throw new Error ('❌Telefone obrigatório');

        const produtoAdcionado = await salvarProduto(produto);
        resp.send(produtoAdcionado);

    } catch (err) {

            resp.status(400).send({
                erro:err.message
        })

    }
})



export default server;