import { conexao } from "./conection.js";

export async function listarCategoria() {
    const comando = `
    select id_produto_categoria          as id,
           nm_produto_categoria          as categoria
    from tb_produto_categoria
    ` 

    const [linhas] = await conexao.query(comando)
    
    return linhas;
}

export async function BuscarCategoriaPorID(id) {
    const comando = `
    select id_produto_categoria          as id,
           nm_produto_categoria          as categoria
    from tb_produto_categoria
    where id_produto_categoria = ?
    ` 

    const [linhas] = await conexao.query(comando, [id])
    return linhas[0];
}