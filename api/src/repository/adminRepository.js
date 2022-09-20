import { conexao } from './conection.js';

export async function loginAdmin(email, senha) {
    const comando = `
        select ds_email             as email,
               ds_senha             as senha
            from tb_usuario_login
        where ds_email              = ?
            and ds_senha            = ? `
    const {linhas} = await conexao.query(comando [email, senha])
    return linhas[0]
}
