import { conexao } from "./connection.js";


export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (nm_produto, ds_modelo, ds_produto, nr_estoque, ds_marca, nr_preço)
                        values (?, ?, ?, ?, ?, ?)
    `

    const dataAtual = new Date();
    const [resp] = await conexao.query(comando, [
                            produto.idDepartamento,
                            produto.nome,
                            produto.preco,
                            dataAtual,
                            produto.destaque
                        ])
    return resp.insertId;
}



export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}