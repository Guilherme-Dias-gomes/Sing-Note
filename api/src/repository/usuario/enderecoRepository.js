import { conexao } from '../conection.js'


export async function listarEnderecoUsuario(idUsuario) {
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


export async function  salvarEnderecoUsuario(idUsuario, endereco) {
    const comando = 
        ` insert into TB_USUARIO_ENDERECO (id_usuario, ds_cep, ds_rua, ds_casa, ds_referencia, ds_complemento, ds_bairro, ds_cidade, ds_uf)
                               values (?, ?, ?, ?, ?, ?, ?, ?, ?) `

    const [info] = await conexao.query(comando,[idUsuario, endereco.cep, endereco.rua, endereco.casa, endereco.referencia, endereco.complemento, endereco.bairro, endereco.cidade, endereco.uf])
    return info.insertId; 
}


