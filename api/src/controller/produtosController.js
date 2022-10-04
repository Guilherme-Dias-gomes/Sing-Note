import multer from 'multer'
import { Router } from 'express';

import { ConsultarTodosProdutos, salvarProduto, salvarProdutoImagem, BuscarProdutoPorNome, removerProduto, removerProdutoImagens, removerProdutoCategorias } from '../repository/produtoRepository.js';
import { validarProduto } from '../service/produtoValidacao.js';
import { BuscarCategoriaPorID } from '../repository/categoriaRepository.js';

const server = Router();

const upload = multer({ dest:'storage/produto' })

// Cadastrar Produtos
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

// Cadastrar Imagem
server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        for (const imagem of imagens){
            await salvarProdutoImagem(id, imagem.path)
        }

        resp.status(204).send()
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
    })
    }
})

// Consultar Todos os Produtos
server.get('/admin/produto', async (req, resp) => {
    try {
        const resposta = await ConsultarTodosProdutos();

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
    })
}
})


// Buscar Produto por Nome
server.get('/admin/produto', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await BuscarProdutoPorNome(nome);

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
    })
}
})


// Deletar Produto por ID
server.delete('/admin/produto/:id', async (req, resp) => {
    try {
       const id = req.params.id;

       await removerProduto(id);
       await removerProdutoImagens(id);

       resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;