import { conexao } from './conection.js';

export async function salvarProduto(produto) {
    const comando = `
    insert into tb_produto (nm_produto, ds_modelo, ds_produto, nr_estoque, ds_marca, nr_preco, id_produto_categoria, id_produto_tipo)
                     values(?, ?, ?, ?, ?, ?, ?, ?)`

    const [resp] = await conexao.query(comando, [
                            produto.nome,
                            produto.modelo,
                            produto.descricao,
                            produto.estoque,
                            produto.marca,
                            produto.preco,
                            produto.categoria,
                            produto.tipo
                        ]);
    produto.id = resp.insertId
    return produto;
}

