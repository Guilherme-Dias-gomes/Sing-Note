import { conexao } from '../conection.js';

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
                           nr_estoque               Estoque,
                       max(img_produto)             Imagem,
     max(tb_produto_imagem.id_produto_imagem)       idImagem
           from tb_produto
      left join tb_produto_imagem 
             on tb_produto.id_produto = tb_produto_imagem.id_produto
            group 
               by tb_produto.id_produto,
                             nm_produto,
                             ds_modelo,
                             ds_marca,
                             nr_preco
                    `
 
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
                        nr_estoque               Estoque,
                    max(img_produto)             Imagem,
  max(tb_produto_imagem.id_produto_imagem)       idImagem
        from tb_produto
   left join tb_produto_imagem 
          on tb_produto.id_produto = tb_produto_imagem.id_produto
        where nm_produto like ?
       group 
          by tb_produto.id_produto,
                        nm_produto,
                        ds_modelo,
                        ds_marca,
                        nr_preco
                    `
    
        const [registros] = await conexao.query(comando, [`%${nome}%`]);
        return registros;
}

// Consultar produtos por ID(Para fazer alterações)
export async function BuscarProdutoPorId(id){
    const comando = 
            `select id_produto                       as Id, 
                    nm_produto                       as Nome, 
                    ds_modelo                        as Modelo,
                    ds_produto                       as EspecificacoesTecnicas,
                    nr_estoque                       as Estoque,
                    ds_marca                         as Marca,
                    nr_preco                         as Preco,
                    id_produto_categoria             as IdCategoria,
                    id_produto_tipo                  as IdTipo
               from tb_produto
              where id_produto = ?`
 
    const [registros] = await conexao.query(comando, [id]);
    return registros[0];
}

// Consultar Imagem do produtos por ID(Para fazer alterações)
export async function buscarProdutoImagens (idProduto) {
    const comando = `
        select img_produto              as imagem
          from tb_produto_imagem
         where id_produto = ?
            `
    const [registros] = await conexao.query(comando, [idProduto]);
    return registros.map(item => item.imagem);
}

// Deletar Imagens dos produtos
export async function removerProdutoImagens(idProduto) {
    const comando = `
        delete from tb_produto_imagem
              where id_produto = ?    
    `
    const [resp] = await conexao.query(comando, [idProduto])
    return resp.affecteRows;
}

// Deletar Produtos 
export async function removerProduto(idProduto) {
    const comando = `
        delete from tb_produto
              where id_produto = ?    
    `

    const [resp] = await conexao.query(comando, [idProduto])
    return resp.affecteRows;
}

// Alterar Imagem
export async function removerProdutoImagensDiferentesDe(imagens) {
    const comando = `
       delete from tb_produto_imagem
             where img_produto NOT IN(?)    
    `

    const [resp] = await conexao.query(comando, [imagens])
    return resp.affecteRows;
}

// alterar produto
export async function alterarProduto (id, produto) {
    const comando = `
    update tb_produto
	   set nm_produto             = ?,    
		   ds_modelo              = ?,            
		   ds_produto             = ?,           
		   nr_estoque             = ?,          
		   ds_marca               = ?,
           nr_preco               = ?,
           id_produto_categoria   = ?,
           id_produto_tipo        = ?
	 where id_produto             = ?`

    const [resp] = await conexao.query(comando, [
                                        produto.nome,
                                        produto.modelo,
                                        produto.descricao,
                                        produto.estoque,
                                        produto.marca,
                                        produto.preco,
                                        produto.idCategoria,
                                        produto.idTipo,
                                        id
    ])
    return resp.affectedRows;
}
   