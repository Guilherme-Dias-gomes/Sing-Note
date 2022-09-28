import { Router } from 'express';
import { salvarProduto } from '../repository/produtoRepository.js';
import { BuscarTipoPorID } from '../repository/tipoRepository.js';
import { BuscarCategoriaPorID } from '../repository/categoriaRepository.js'

const server = Router();



server.post('/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

        if(!produto.nome) 
            throw new Error ('❌Nome do produto não informado');

        if(!produto.modelo) 
            throw new Error ('❌Modelo não informado');

        if(!produto.descricao) 
            throw new Error ('❌Descrição não informada');

        if(!produto.estoque) 
            throw new Error ('❌Estoque não informado');

        if(!produto.marca) 
            throw new Error ('❌Marca não informado');

        if(!produto.preco) 
            throw new Error ('❌Preço não informado');
        
        const tipo = await BuscarTipoPorID(produto.tipo);

        if(tipo == undefined)
            throw new Error ('❌Tipo Inválido');

        const categoria = await BuscarCategoriaPorID(produto.categoria);

        if(categoria == undefined)
            throw new Error ('❌Categoria Inválido');

        const r = await salvarProduto(produto);
        resp.status(204).send();

        
    } catch (err) {

            resp.status(400).send({
                erro:err.message
        })

    }
})



export default server;