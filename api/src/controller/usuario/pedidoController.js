import randomString from 'randomstring'
import { consultarPedido, inserirPagamento, inserirPedido, inserirPedidoItem } from '../../repository/usuario/pedidoRepository.js';
import { BuscarProdutoPorId } from '../../repository/admin/produtoRepository.js';
import { acharCupom, criarNotaFiscal, criarNovoPedido } from '../../service/novoProdutoService.js';
import { Router } from 'express';
const server = Router();


server.post('/api/pedido/:idUsuario', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;

        const idCupom = await acharCupom(info.cupom)

        const novoPedido = criarNovoPedido(idUsuario, idCupom, info)

        const idPedidoCriado = await inserirPedido(novoPedido)
        await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await BuscarProdutoPorId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.Preco)
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/api/acompanhar/:idUsuario', async (req, resp) => {
    try {
        const {idUsuario} = req.params
        
        const pedido = await consultarPedido(idUsuario)
        
        resp.send(pedido)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;