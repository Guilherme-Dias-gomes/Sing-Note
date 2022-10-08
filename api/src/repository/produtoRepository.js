import { conexao } from './conection.js';

//Cadastrar Produto
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

// Salvar Imagem
export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_imagem (id_produto, img_produto)
                                  values (?, ?)
    `

    const [resp] = await conexao.query(comando, [idProduto, imagemPath])
}

//Consultar Todos os Produtos
export async function ConsultarTodosProdutos(){
    const comando = 
       ` select tb_produto.id_produto               Id,
                           nm_produto               Nome,
                           ds_modelo                Modelo,
                           ds_marca                 Marca,
                           nr_preco                 Preco,
                           img_produto              Imagem,
         tb_produto_imagem.id_produto_imagem        idImagem
                      from tb_produto
                inner join tb_produto_imagem on tb_produto.id_produto = tb_produto_imagem.id_produto
                     where mod(tb_produto_imagem.id_produto_imagem, 2) = 1`
 
    const [registros] = await conexao.query(comando);
    return registros;
}

// Consultar produto por nome
export async function ConsultarProdutosPorNome(nome){
    const comando = 
    ` select tb_produto.id_produto               Id,
                        nm_produto               Nome,
                        ds_modelo                Modelo,
                        ds_marca                 Marca,
                        nr_preco                 Preco,
                        img_produto              Imagem,
      tb_produto_imagem.id_produto_imagem        idImagem
                   from tb_produto
             inner join tb_produto_imagem on tb_produto.id_produto = tb_produto_imagem.id_produto
                  where mod(tb_produto_imagem.id_produto_imagem, 2) = 1
                    and nm_produto like ?`
     
        const [registros] = await conexao.query(comando, [`%${nome}%`]);
        return registros;
}

// Consultar produtos por ID
export async function ConsultarProdutosPorId(id){
    const comando = 
         `select tb_produto.id_produto                    as Id, 
         nm_produto                                as Nome, 
         ds_modelo                                as Modelo,
         ds_produto                                as EspecificaçõesTecnicas,
         nr_estoque                                as Estoque,
         ds_marca                                    as Marca,
         nr_preco                                    as Preço,
         tb_produto.id_produto_categoria          as Categoria,
         tb_produto.id_produto_tipo               as Tipo,
         tb_produto_imagem.id_produto_imagem      as Imagem
   from tb_produto
  inner join tb_produto_tipo      
          on tb_produto_tipo.id_produto_tipo = tb_produto.id_produto_tipo
  inner join tb_produto_categoria
          on tb_produto_categoria.id_produto_categoria = tb_produto.id_produto_categoria
  inner join tb_produto_imagem
          on tb_produto.id_produto = tb_produto_imagem.id_produto
       where tb_produto.id_produto = ?`
 
    const [registros] = await conexao.query(comando, [id]);
    return registros[0];
}

export async function buscarProdutoImagens (idProduto) {
    const comando = `
        select tb_produto.id_produto               Id,
                tb_produto_imagem.id_produto_imagem        idImagem
                from tb_produto
                inner join tb_produto_imagem on tb_produto.id_produto = tb_produto_imagem.id_produto
            `
    const [resp] = await conexao.query(comando, [idProduto]);
    return resp;
}

// deletar 
export async function removerProduto(idProduto) {
    const comando = `
        DELETE FROM TB_PRODUTO_CATEGORIA
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

// alterar produto
export async function alterarProduto (id, produto) {
    const comando = `
    update tb_produto
	set  NM_PRODUTO = ?,    
		DS_MODELO   =?,            
		DS_PRODUTO  =?,           
		NR_ESTOQUE  =?,          
		DS_MARCA    =?
	where id_produto = ${id}`

    const [resp] = await conexao.query(comando, [
                                 produto.NM_PRODUTO,
                                 produto.DS_MODELO,
                                 produto.DS_PRODUTO,
                                 produto.NR_ESTOQUE,
                                 produto.DS_MARCA
    ])
    return resp.affectedRows;
}

// export async function removerProduto(idProduto) {
//     const comando = `
//         DELETE FROM TB_PRODUTO
//          WHERE ID_PRODUTO = ?    
//     `

//     const [resp] = await conexao.query(comando, [idProduto])
//     return resp.affecteRows;

// }
   