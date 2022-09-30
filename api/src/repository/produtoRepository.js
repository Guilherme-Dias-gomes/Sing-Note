import { conexao } from './conection.js';


export async function salvarProduto(produto) {
    const comando = `
    insert into tb_produto (nm_produto, ds_modelo, ds_produto, nr_estoque, ds_marca, nr_preco, id_produto_categoria,  id_produto_tipo)
                     values(?, ?, ?, ?, ?, ?, ?, ? )`

    const [resposta] = await conexao.query(comando, [
                            produto.nome,
                            produto.modelo,
                            produto.descricao,
                            produto.estoque,
                            produto.marca,
                            produto.preco,
                            produto.idCategoria,
                            produto.idTipo
                           ]);
                           
    return resposta.insertId;
}

export async function salvarImagem(idProduto, idImagem) {
    const comando = `
        insert into tb_produto_imagem (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idImagem])
}