import multer from 'multer'
import { Router } from 'express';

import { ConsultarTodosProdutos, salvarProduto, buscarProdutoImagens, alterarProduto, salvarProdutoImagem, removerProduto, removerProdutoImagens, ConsultarProdutosPorNome, BuscarProdutoPorId, removerProdutoImagensDiferentesDe } from '../repository/produtoRepository.js';
import { validarProduto } from '../service/produtoValidacao.js';

const server = Router();

const upload = multer({ dest:'storage/produto' })

// Cadastro de Produtos
server.post('/admin/produto' , async (req, resp) => {
    try {
        const produto = req.body;

         await validarProduto(produto)

        const produtoInserido = await salvarProduto(produto);

        resp.send({
            id: produtoInserido.id
        });

    } catch (err) {
            resp.status(400).send({
                erro:err.message
        })
    }
})

// Cadastrar Imagens
server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imgs = req.files;
        const imagensPermanecem = req.body.imagens.filter(item => item != 'undefined')

        await removerProdutoImagensDiferentesDe(imagensPermanecem)

        for (const imagem of imgs){
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
            const resposta =  await ConsultarTodosProdutos();
            resp.send(resposta);
            
        } catch (err) {
            resp.status(404).send({
                erro:err.message
            })
        }
})

// Consultar Produto Por Nome
server.get('/admin/produto/buscar', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await ConsultarProdutosPorNome(nome)
        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

// Deletar Produto p/ ID
server.delete('/admin/produto/:id', async (req, resp) => {
    try {
       const id = req.params.id;

       await removerProdutoImagens(id);
       await removerProduto(id);
       
       resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// Carregar Informações do produto por ID(Para alteração)
server.get('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produtos = await BuscarProdutoPorId(id)
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

server.put('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body

        await alterarProduto(id, produto)

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;