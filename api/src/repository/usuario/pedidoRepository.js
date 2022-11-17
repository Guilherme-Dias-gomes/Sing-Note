import { conexao } from "../conection.js";


export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_Usuario,
            id_usuario_endereco,
            id_cupom,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,
        novoPedido.idCupom,
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}




export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_pagamento_cartao (
                id_pedido,
                nm_cartao,
                nr_cartao,
                dt_vencimento,
                cod_seguranca,
                nr_parcelas,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await conexao.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}


export async function inserirPedidoItem(idPedido, idProduto, qtd, preco) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [idPedido, idProduto, qtd, preco]);
    return info.affectedRows;
}

export async function consultarPedido(idUsuario) {
    const comando = `
    select tb_pedido.id_pedido          id,
				 nm_produto    nome,
				 nm_usuario			nomeUsu,
				 ds_modelo          modelo
          from tb_pedido
         inner join tb_usuario 
            on tb_usuario.ID_USUARIO = tb_pedido.id_usuario
         inner join tb_pedido_item 
            on tb_pedido_item.id_pedido = tb_pedido.id_pedido
         inner join tb_produto 
            on tb_produto.id_produto = tb_pedido_item.id_produto
		where tb_usuario.id_usuario = ?;
    `

    const [info] = await conexao.query(comando, [idUsuario]);
    return info;
}
