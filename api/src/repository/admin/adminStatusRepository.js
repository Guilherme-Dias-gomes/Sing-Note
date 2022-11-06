import { conexao } from '../conection.js'

//Buscar Informações de todos os Pedidos
export async function buscarTodosPedidos(){
    const comando = 
    `select max(id_pedido)            as ID,
            nm_usuario                 as Nome,
            ds_cpf                     as CPF,
            ds_status                  as Situacao_do_Pedido,
            dt_pedido                  as Data_do_Pedido
        from tb_pedido
  inner join tb_usuario 
          on tb_usuario.id_usuario = tb_pedido.id_usuario
  inner join tb_usuario_endereco 
          on tb_usuario.id_usuario = tb_usuario_endereco.id_usuario
       group 
          by nm_usuario,
             ds_cpf,
             ds_status,
             dt_pedido`

      const [resp] = await conexao.query(comando)
      return resp
}

//Buscar Informações do pedidos por ID
export async function buscarPedidosPorId(idUsuario){
    const comando = 
    `select tb_usuario.id_usuario      Id,
            nm_usuario                 Nome,
            ds_cpf                     CPF,
            ds_status                  Situacao_do_Pedido,
date_format(dt_pedido, "%d/%m/%Y")     Data_do_Pedido
       from tb_pedido
 inner join tb_usuario 
         on tb_usuario.id_usuario = tb_pedido.id_usuario
 inner join tb_usuario_endereco 
         on tb_usuario.id_usuario = tb_usuario_endereco.id_usuario
      where id_pedido = ?`

      const [resp] = await conexao.query(comando, [idUsuario])
      return resp
}

//Buscar Informações dos pedidos
export async function buscarPedidosPorNome(nome){
    const comando = 
    `select max(id_pedido) as ID,
            nm_usuario                 as Nome,
            ds_cpf                     as CPF,
            ds_status                  as Situacao_do_Pedido,
            dt_pedido                  as Data_do_Pedido
        from tb_pedido
  inner join tb_usuario 
          on tb_usuario.id_usuario = tb_pedido.id_usuario
  inner join tb_usuario_endereco 
          on tb_usuario.id_usuario = tb_usuario_endereco.id_usuario
       where nm_usuario like ?
       group 
          by nm_usuario,
             ds_cpf,
             ds_status,
             dt_pedido`

      const [resp] = await conexao.query(comando, [`%${nome}%`])
      return resp
}