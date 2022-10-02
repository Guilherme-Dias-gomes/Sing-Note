import { conexao } from './conection.js'

export async function loginUsuario (email, senha) {
    const comando = 
    `select ds_email            as email,
       ds_senha         as senha
       from TB_USUARIO_LOGIN
        where ds_email = ?
        and ds_senha = ? `

const [linhas] = await conexao.query(comando,[email, senha])
return linhas [0];

}