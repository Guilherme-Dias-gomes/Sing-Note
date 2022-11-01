import randomString from 'randomstring'
import { inserirPagamento, inserirPedido, inserirPedidoItem } from '../../repository/usuario/pedidoRepository.js';
import { BuscarProdutoPorId } from '../../repository/admin/produtoRepository.js';
import { acharCupom, criarNotaFiscal, criarNovoPedido } from '../../service/novoProdutoService.js';
import { Router } from 'express';
const server = Router();


server.post('/api/pedido/:idUsario', async (req, resp) => {
    try {
        const { idUsuario } = req.params.id;
        const info = req.body;

        const idCupom = await acharCupom(info.cupom)

        const novoPedido = criarNovoPedido(idUsuario, idCupom, info)

        const idPedidoCriado = await inserirPedido(novoPedido)
        const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await BuscarProdutoPorId(item.id);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.Id, item.qtd, prod.Preco)
        }
        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;