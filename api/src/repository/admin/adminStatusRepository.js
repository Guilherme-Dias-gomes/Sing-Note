import { conexao } from '../conection.js'

//Buscar Informações de todos os Pedidos
export async function buscarTodosPedidos(){
    const comando = 
    `select tb_pedido.id_pedido    as ID,
            nm_usuario             as Nome,
            ds_cpf                 as CPF,
            ds_status              as Situacao_do_Pedido,
date_format(dt_pedido, "%d/%m/%Y") as Data_do_Pedido,
            ds_rua                 as Rua,
            ds_casa                as Numero,
            ds_cep                 as CEP,
            ds_bairro              as Bairro,
            ds_cidade              as Cidade,
            ds_uf                  as UF,
            ds_complemento         as Complemento,
            ds_referencia          as Referencia
       from tb_pedido
 inner join tb_usuario 
         on tb_usuario.id_usuario = tb_pedido.id_usuario
 inner join tb_usuario_endereco 
         on tb_usuario_endereco.id_usuario_endereco = tb_pedido.id_usuario_endereco
      Order 
         by dt_pedido`

      const [resp] = await conexao.query(comando)
      return resp
}

//Buscar Informações do pedidos por ID
export async function buscarPedidosPorId(idUsuario){
    const comando = 
    `select  tb_pedido.id_pedido                   as id,    
                        nm_produto                 as produto,
                        min(img_produto)           as imagens,

                        nm_usuario                 as cliente, 
                        ds_cpf                     as CPF,

            date_format(dt_pedido, "%d/%m/%Y")     as data_do_Pedido,
                        ds_status                  as status,
                        tp_pagamento               as tipoPagamento,
                        tb_pedido_item.qtd_itens   as qtd,
                        tb_pedido_item. vl_produto as valor,

                        ds_cidade                  as cidade,
                        ds_cep                     as CEP,
                        ds_rua					   as rua,
                        ds_casa                    as Nº,
                        ds_complemento             as complemento,
                        ds_referencia              as referencia,
                        ds_bairro                  as bairro
                        from tb_pedido   
             inner join tb_usuario     
                     on tb_pedido.id_usuario= tb_usuario.id_usuario   
             inner join tb_pedido_item 
                     on tb_pedido.id_pedido= tb_pedido_item.id_pedido  
             inner join tb_produto    
                     on tb_pedido_item.id_produto = tb_produto.id_produto 
             inner join tb_produto_imagem
                     on tb_produto.ID_PRODUTO = tb_produto_imagem.id_produto
             inner join tb_usuario_endereco
                     on TB_USUARIO_ENDERECO.id_usuario_endereco = tb_pedido.id_usuario_endereco
                  where tb_pedido.id_pedido = ?
                   group
                      by tb_pedido.id_pedido,    
                         nm_produto,

                         nm_usuario, 
                         ds_cpf,

             date_format(dt_pedido, "%d/%m/%Y"),
                         ds_status,
                         tp_pagamento,
                         tb_pedido_item.qtd_itens,
                         tb_pedido_item. vl_produto,

                         ds_cidade,
                         ds_cep,
                         ds_rua,
                         ds_casa,
                         ds_complemento,
                         ds_referencia,
                         ds_bairro
                    order 
                       by dt_pedido`

      const [resp] = await conexao.query(comando, [idUsuario])
      return resp
}

//Buscar Informações dos pedidos
export async function buscarPedidosPorNome(nome){
    const comando = 
    `select tb_pedido.id_pedido    as ID,
            nm_usuario             as Nome,
            ds_cpf                 as CPF,
            ds_status              as Situacao_do_Pedido,
date_format(dt_pedido, "%d/%m/%Y") as Data_do_Pedido,
            ds_rua                 as Rua,
            ds_casa                as Numero,
            ds_cep                 as CEP,
            ds_bairro              as Bairro,
            ds_cidade              as Cidade,
            ds_uf                  as UF,
            ds_complemento         as Complemento,
            ds_referencia          as Referencia
       from tb_pedido
 inner join tb_usuario 
         on tb_usuario.id_usuario = tb_pedido.id_usuario
 inner join tb_usuario_endereco 
         on tb_usuario_endereco.id_usuario_endereco = tb_pedido.id_usuario_endereco
      where nm_usuario like ?`

      const [resp] = await conexao.query(comando, [`%${nome}%`])
      return resp
}