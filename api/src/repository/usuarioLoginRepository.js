import { conexao } from './conection.js'

// Logar Usuario
export async function loginUsuario (email, senha) {
    const comando = 
    `  select tb_usuario.id_usuario         as id,
                         nm_usuario         as nome
         from tb_usuario
   inner join tb_usuario_login
           on tb_usuario_login.id_usuario = tb_usuario.id_usuario
        where ds_email = ?
          and ds_senha = md5(?) `

    const [registros] = await conexao.query(comando,[email, senha])
    return registros [0];
}

// Contar Produtos
export async function QuantificarTodosProdutos(){
    const comando =
    ` select count(tb_produto.id_produto)              as Quantidade
        from tb_produto
  inner join tb_produto_imagem 
          on tb_produto.id_produto = tb_produto_imagem.id_produto
       where mod(tb_produto_imagem.id_produto_imagem, 2) = 0`

    const [resposta] = await conexao.query(comando);
    return resposta
}