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
         by dt_pedido desc`

      const [resp] = await conexao.query(comando)
      return resp
}

//Buscar Informações do pedidos por ID
export async function buscarPedidosPorId(idUsuario){
    const comando = 
    `select id_pedido      as id,
            ds_status      as status    
       from tb_pedido                 
      where id_pedido = ?
`

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
      where nm_usuario like ?
      Order 
         by dt_pedido desc`

      const [resp] = await conexao.query(comando, [`%${nome}%`])
      return resp
}

export async function alterarStatusPedido(pedido, idPedido){
        const comando =
        `
        update tb_pedido
           set ds_status = ?
         where id_pedido = ?
        `
        const [resp] = await conexao.query(comando, [pedido.Status, idPedido]);
        return resp.affectedRows 
}
