import { conexao } from '../conection.js'

// Logar Usuario
export async function loginUsuario (email, senha) {
    const comando = 
    `  select tb_usuario.id_usuario                  id,
                         nm_usuario     			 nome
         from tb_usuario
        inner join tb_usuario_login on tb_usuario_login.id_usuario = tb_usuario.id_usuario
        where ds_email = ?
          and ds_senha = md5(?)`

    const [registros] = await conexao.query(comando,[email, senha]);
    return registros[0];
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

// Cadastrar Login do usuario
export async function cadastrarUsuarioLogin(login, idUsuario){
    const comando = 
    `insert into tb_usuario_login(ds_email, ds_senha, id_usuario)
                           values(?, md5(?), ?)` 

    const [resposta] = await conexao.query(comando,[login.email, login.senha, idUsuario])

}

// Buscar Perfil do Usuario
export async function buscarPerfilPorId(id){
    const comando = 
    `select id_usuario                   as IdUsuario,
            nm_usuario                   as NomeUsuario,
            ds_rg                        as Rg,
            ds_cpf                       as Cpf,
date_format(dt_nascimento, '%d/%m/%Y')   as Nascimento,
            ds_telefone                  as Telefone
       from tb_usuario
      where id_usuario = ?`

      const resposta = await conexao.query(comando, [id])
      return resposta[0]
}

// Buscar Login do Usuario
export async function buscarLoginPorId(idUsuario){
    const comando = 
    `select ds_email                as Email,
            ds_senha                as Senha
       from tb_usuario_login
      where id_usuario = ?`

      const resposta = await conexao.query(comando, [idUsuario])
      return resposta[0]
}

// Alterar Usuario
export async function alterarUsuarioPerfil(usuario, idUsuario){
    const comando = 
    ` update tb_usuario
         set nm_usuario    = ?,
             ds_rg         = ?,
             ds_cpf        = ?,
             dt_nascimento = ?,
             ds_telefone   = ?
       where id_usuario    = ?`
    const [resposta] = await conexao.query(comando,[ 
                                                      usuario.nomeUsuario,
                                                      usuario.rg,
                                                      usuario.cpf,
                                                      usuario.nascimento,
                                                      usuario.telefone,
                                                      idUsuario])
    return resposta.affectedRows;
}

// export async function removerUsuarioLogin(idUsuario) {
//     const comando = `
//         delete from tb_usuario_login 
//               where id_usuario = ?
//     `

//     const [resp] = await conexao.query(comando, [idUsuario])
//     return resp.affectedRows;
// }

// Alterar Login do usuario
export async function alterarUsuarioLogin(login, idUsuario){
    const comando = 
    ` update tb_usuario_login
         set ds_email    = ?,
             ds_senha    = md5(?)
       where id_usuario  = ?`
    const [resposta] = await conexao.query(comando,[ 
                                                      login.email,
                                                      login.senha,
                                                      idUsuario])
                                                      
    return resposta.affectedRows;
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