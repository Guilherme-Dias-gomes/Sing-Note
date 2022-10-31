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
    `select id_usuario              as id,
            nm_usuario              as nome,
            ds_rg                   as rg,
            ds_cpf                  as cpf,
            dt_nascimento           as nascimento,
            ds_telefone             as telefone
       from tb_usuario
      where id_usuario = ?`

      const resposta = await conexao.query(comando, [id])
      return resposta[0]
}

// Buscar Login do Usuario
export async function buscarLoginPorId(idUsuario){
    const comando = 
    `select ds_email                as email,
            ds_senha                as senha
       from tb_usuario_login
      where id_usuario = ?`

      const resposta = await conexao.query(comando, [idUsuario])
      return resposta[0]
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