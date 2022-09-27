import { conexao } from "./conection.js";

export async function listarTipo() {
    const comando = `
    select id_produto_tipo          as id,
           nm_produto_tipo          as tipo
      from tb_produto_tipo
    ` 

    const [linhas] = await conexao.query(comando)
    return linhas;
}

export async function BuscarTipoPorID(id) {
    const comando = `
    select id_produto_tipo          as id,
           nm_produto_tipo          as tipo
    from tb_produto_tipo
    ` 

    const [linhas] = await conexao.query(comando, [id])
    return linhas[0];
}