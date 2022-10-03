import multer from 'multer'
import { Router } from 'express';

import { ConsultarTodosProdutos, salvarProduto, salvarProdutoImagem } from '../repository/produtoRepository.js';
import { validarProduto } from '../service/produtoValidacao.js';

const server = Router();

const upload = multer({ dest:'/storage/produto' })

server.post('/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

         await validarProduto(produto)

        const produtoInserido = await salvarProduto(produto);

        resp.send({
            id: produtoInserido
        });

    } catch (err) {
            resp.status(400).send({
                erro:err.message
        })
    }
})

server.put('/admin/produto/:id', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        for (const imagem of imagens){
            await salvarProdutoImagem(id, imagem.path)
        }
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
    })
}
})

server.get('/admin/produto', async (req, resp) => {
    try {
        const resposta = ConsultarTodosProdutos();

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
    })
}
})



export default server;