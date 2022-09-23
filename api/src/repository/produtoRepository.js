import { conexao } from "./connection.js";


export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (nm_produto, ds_modelo, ds_categoria, ds_tipo, ds_produto, nr_estoque, ds_marca, nr_preço)
                        values (?, ?, ?, ?, ?, ?, ?, ?)`

    const [resp] = await conexao.query(comando, [
                            produto.nome,
                            produto.modelo,
                            produto.categoria,
                            produto.tipo,
                            produto.descricao,
                            produto.estoque,
                            produto.marca,
                            produto.preco 
                        ]);
    produto.id = resp.insertId
    return produto;
}

