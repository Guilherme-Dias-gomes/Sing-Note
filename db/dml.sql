use singnote;

-- LOGIN ADM
   insert into tb_admin(ds_email, ds_senha)
                         values('admin@gmail.com','1234');

-- VERIFICAR LOGIN ADMIN
select ds_email            as email,
       ds_senha         as senha
    from tb_admin
   where ds_email = 'admin@gmail.com'
     and ds_senha = '1234' ;



-- CADASTRAR PRODUTO
insert into tb_produto (nm_produto, ds_modelo, ds_produto, nr_estoque, ds_marca, nr_preco)
                values('Guitarra', 'Rock Roll', 'Muito Rock', 5, 'aaa', 1000.10);
insert into tb_produto_categoria(nm_produto_categoria)
                          values('Cordas');
insert into tb_produto_tipo(nm_produto_tipo)
                          values('Guitarra');
insert into tb_produto_imagem(img_produto)
                          values('fasdfg');

select * from tb_produto_imagem;
 
-- SELECIONAR TODOS OS PRODUTOS
select nm_produto,
	   ds_modelo,
       ds_produto,
       nr_estoque,
       ds_marca,
       nr_preco,
       nm_produto_categoria,
       nm_produto_tipo,
       img_produto
 from tb_produto
inner join tb_produto_categoria on tb_produto_categoria.id_produto_categoria = tb_produto.id_produto_categoria
inner join tb_produto_tipo on tb_produto_tipo.id_produto_tipo = tb_produto.id_produto_tipo
inner join tb_produto_imagem on  tb_produto.id_produto_imagem = tb_produto_imagem.id_produto_imagem;


-- SELECIONAR TODAS AS CATEGORIAS
select *
 from tb_produto_categoria;


-- SELECIONAR TODAS OS TIPOS
select *
 from tb_produto_tipo;