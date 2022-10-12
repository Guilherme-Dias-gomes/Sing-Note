import { conexao } from './conection.js'

// Logar Usuario
export async function loginUsuario (email, senha) {
    const comando = 
    `select ds_email            as email,
       ds_senha                 as senha
       from TB_USUARIO_LOGIN
        where ds_email = ?
        and ds_senha = ? `

    const [linhas] = await conexao.query(comando,[email, senha])
    return linhas [0];
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