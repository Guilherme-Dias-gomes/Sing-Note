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
                           
    produto.id = resposta.insertId
    return produto;
}

export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_imagem (id_produto, img_produto)
                                  values (?, ?)
    `

    const [resp] = await conexao.query(comando, [idProduto, imagemPath])
}

export async function ConsultarTodosProdutos(){
    const comando = 
    `select id_produto,
            nm_produto,
            ds_modelo,
            ds_produto,
            nr_estoque,
            ds_marca,
            nr_preco,
            nm_produto_categoria,
            nm_produto_tipo
       from tb_produto
 inner join tb_produto_categoria on tb_produto_categoria.id_produto_categoria = tb_produto.id_produto_categoria
 inner join tb_produto_tipo on tb_produto_tipo.id_produto_tipo = tb_produto.id_produto_tipo`
 
    const [resp] = await conexao.query(comando)
    return resp[0]
}


// deletar produto
export async function removerProdutoCategorias(idProduto) {
    const comando = `
        DELETE FROM TB_PRODUTO_CATEGORIAS
         WHERE ID_PRODUTO = ?    
    `

    const [resp] = await conexao.query(comando, [idProduto])
    return resp.affecteRows;
}

export async function removerProdutoImagens(idProduto) {
    const comando = `
        DELETE FROM TB_PRODUTO_IMAGEM
         WHERE ID_PRODUTO = ?    
    `

    const [resp] = await conexao.query(comando, [idProduto])
    return resp.affecteRows;
}

export async function removerProduto(idProduto) {
    const comando = `
        DELETE FROM TB_PRODUTO
         WHERE ID_PRODUTO = ?    
    `

    const [resp] = await conexao.query(comando, [idProduto])
    return resp.affecteRows;
}