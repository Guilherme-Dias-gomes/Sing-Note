import { conexao } from '../conection.js'


export async function listar(cepUsuario) {
    const comando = 
    ` 
    select cep_usuario_endereco   id, 
         DS_CEP		            cep,
        DS_RUA		            rua,
        DS_CASA		            casa,
        DS_REFERENCIA	        referencia,
        DS_COMPLEMENTO	        complemento,
        DS_BAIRRO		        bairro,
        DS_CIDADE		        cidade,
    
    from tb_usuario_endereco
    where cep_usuario= ? `

    const [registros] = await conexao.query(comando,[cepUsuario])
    return registros;
}


export async function salvar (cep, rua, casa, referencia, complemento, bairro, cidade) {
    const comando = 
    ` insert into TB_USUARIO_ENDERECO (ds_cep, ds_rua, ds_casa, ds_referencia, ds_complemento, ds_bairro, ds_cidade, ds_uf)
    values ( ?, ?, ? , ?, ?, ?, ?, ?);  `

    const [endereco] = await conexao.query(comando,[cep, rua, casa, referencia, complemento, bairro, cidade])
    return endereco.insertcep; 
}


//inserir os endereços nas tabelas depois