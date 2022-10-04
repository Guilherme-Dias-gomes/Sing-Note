import { conexao } from './conection.js';

// Cadastrar Novos produtos
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

// Cadastrar as Imagens
export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_imagem (id_produto, img_produto)
                                  values (?, ?)
    `

    const [resp] = await conexao.query(comando, [idProduto, imagemPath])
}

// Consultar todos os produtos
export async function ConsultarTodosProdutos(){
    const comando = 
    `	 select tb_produto.id_produto               Id,
                           nm_produto               Nome,
                           ds_modelo                Modelo,
                           ds_marca                 Marca,
                           nr_preco                 Preco,
                           img_produto              Imagem
                      from tb_produto
                inner join tb_produto_imagem on tb_produto_imagem.id_produto_imagem = tb_produto.id_produto_imagem`
 
    const [registros] = await conexao.query(comando);
    return registros;
}

// Consultar todos os produtos
export async function BuscarProdutoPorNome(nome){
    const comando = 
    `	 select tb_produto.id_produto               Id,
                           nm_produto               Nome,
                           ds_modelo                Modelo,
                           ds_marca                 Marca,
                           nr_preco                 Preco,
                           img_produto              Imagem
                      from tb_produto
                inner join tb_produto_imagem on tb_produto_imagem.id_produto_imagem = tb_produto.id_produto_imagem
                where nm_produto like ? `
 
    const [registros] = await conexao.query(comando, [`%${nome}%`]);
    return registros;
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