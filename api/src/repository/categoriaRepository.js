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

export async function BuscarProdutoPorCategoria(id) {
    const comando =
    ` 
    select tb_produto.id_produto               Id,
                      nm_produto               Nome,
                      ds_modelo                Modelo,
                      ds_marca                 Marca,
                      nr_preco                 Preco,
                      img_produto              Imagem,
                      nm_produto_categoria	   Categoria,
    tb_produto_imagem.id_produto_imagem        idImagem
                 from tb_produto
           inner join tb_produto_imagem 
                   on tb_produto.id_produto = tb_produto_imagem.id_produto
           inner join tb_produto_categoria 
                   on tb_produto.id_produto_categoria = tb_produto_categoria.id_produto_categoria
                where mod(tb_produto_imagem.id_produto_imagem, 2) = 1
                  and tb_produto_categoria.id_produto_categoria = 1;
    `
    const [registros] = await conexao.query(comando, [id])
    return registros
}