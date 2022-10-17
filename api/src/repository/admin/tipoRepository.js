import { conexao } from "../conection.js";

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
    select id_produto_tipo         as id,
           nm_produto_tipo         as categoria
      from tb_produto_tipo
     where id_produto_tipo =  ?
    ` 
    
    const [linhas] = await conexao.query(comando, [id])
    
    return linhas[0];  
}

export async function BuscarProdutoPorTipo(id){
    const comando =
    `  select tb_produto.id_produto               Id,
                         nm_produto               Nome,
                         ds_modelo                Modelo,
                         ds_marca                 Marca,
                         nr_preco                 Preco,
                         img_produto              Imagem,
                         nm_produto_tipo     	  Tipo,
       tb_produto_imagem.id_produto_imagem        idImagem
                    from tb_produto
              inner join tb_produto_imagem 
                      on tb_produto.id_produto = tb_produto_imagem.id_produto
              inner join tb_produto_tipo
                      on tb_produto.id_produto_tipo = tb_produto_tipo.id_produto_tipo
                   where mod(tb_produto_imagem.id_produto_imagem, 2) = 0
                     and tb_produto_tipo.id_produto_tipo = ?`

    const [registros] = await conexao.query(comando, [id]);
    return registros
}