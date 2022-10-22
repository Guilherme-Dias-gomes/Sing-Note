import { conexao } from '../conection.js'


export async function listar(idUsuario) {
    const comando = 
    ` 
    select  id_usuario_endereco  id,
            ds_cep				 cep,
            ds_rua				 rua,
            ds_casa              numero,
            ds_referencia        referencia,
            ds_bairro			 bairro,
            ds_cidade			 cidade,
            ds_uf			 	 uf,
            ds_complemento		 complemento
      from tb_usuario_endereco
     where ID_USUARIO = ?`

    const [registros] = await conexao.query(comando, [idUsuario])
    return registros;
}


export async function salvar (idUsuario, endereco) {
    const comando = 
    ` insert into TB_USUARIO_ENDERECO (ds_cep, ds_rua, ds_casa, ds_referencia, ds_complemento, ds_bairro, ds_cidade, ds_uf, id_usuario)
                               values (?, ?, ? , ?, ?, ?, ?, ?, ?) `

    const [info] = await conexao.query(comando,[idUsuario, endereco.cep, endereco.rua, endereco.casa, endereco.referencia, endereco.bairro, endereco.cidade, endereco.uf, endereco.complemento])
    return info.insertId; 
}


