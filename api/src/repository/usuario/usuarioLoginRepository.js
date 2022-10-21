import { conexao } from '../conection.js'

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

//Cadastrar Usuario
export async function cadastrarUsuario (usuario) {
    const comando = 
    ` insert into tb_usuario(nm_usuario, ds_rg, ds_cpf, dt_nascimento, ds_telefone) 
                      values(?, ?, ?, ?, ?)`

    const [resposta] = await conexao.query(comando,[
                                        usuario.nomeUsuario,
                                        usuario.rg,
                                        usuario.cpf,
                                        usuario.nascimento,
                                        usuario.telefone])
    usuario.id = resposta.insertId
    return usuario;
}

// export async function buscarUsuarioPerfil(id){
//     const comando = 
//     ``
// }


// Cadastrar Login do usuario
export async function cadastrarUsuarioLogin(login, idUsuario){
    const comando = 
    `insert into tb_usuario_login(ds_email, ds_senha, id_usuario)
                           values(?, ?, ?)` 

    const [resposta] = await conexao.query(comando,[login.email, login.senha, idUsuario,])

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