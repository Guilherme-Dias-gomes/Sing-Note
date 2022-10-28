import { conexao } from "../conection.js";

export async function buscarCupom(cod) {
    const comando = `
         SELECT id_cupom         id,
                cod_cupom        cod,
                vl_cupom         valor,
                qtd_restante     restante
           FROM cupom 
          WHERE cod_cupom = ?
    `

    const [linhas] = await conexao.query(comando, [cod]);
    return linhas[0];
}


export async function atualizarCupom(cod) {
    const comando = `
        UPDATE cupom
           SET qtd_restante = qtd_restante - 1
         WHERE cod_cupom = ?
    `

    const [info] = await conexao.query(comando, [cod]);
    return info.affectedRows;
}
