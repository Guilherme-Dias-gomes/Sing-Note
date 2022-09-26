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
insert into tb_produto (nm_produto, ds_modelo, ds_produto, nr_estoque, ds_marca, nr_preco, id_produto_categoria, id_produto_tipo)
                values('Guitarra', 'Rock Roll', 'Muito Rock', 5, 'aaa', 1000.10, 1, 1);
 
-- SELECIONAR TODAS AS CATEGORIAS
select id_produto_categoria         as id,
	   nm_produto_categoria          as categoria
  from tb_produto_categoria;

-- SELECIONAR TODAS OS TIPOS
select id_produto_tipo         as id,
	   nm_produto_tipo          as categoria
  from tb_produto_tipo;

  -- BUSCAR CATEGORIAS
select id_produto_categoria         as id,
	   nm_produto_categoria         as categoria
  from tb_produto_categoria
 where id_produto_categoria = 1;
 
 -- BUSCAR TIPOS
select id_produto_tipo         as id,
	   nm_produto_tipo         as categoria
  from tb_produto_tipo
 where id_produto_tipo = 1;