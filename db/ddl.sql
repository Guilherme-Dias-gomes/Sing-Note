create database singnote;
use singnote;

create table TB_PRODUTO_TIPO(
    ID_PRODUTO_TIPO     	int primary key auto_increment,
    NM_PRODUTO_TIPO             varchar(100)    
);

create table TB_PRODUTO_CATEGORIA(
    ID_PRODUTO_CATEGORIA        	int primary key auto_increment,
    NM_PRODUTO_CATEGORIA		varchar(100)    
);

create table TB_PRODUTO(
    ID_PRODUTO	        int primary key auto_increment,
    NM_PRODUTO		    varchar(100),
    DS_MODELO               varchar(200),
    DS_PRODUTO              varchar(5000),
    NR_ESTOQUE              int,
    DS_MARCA                varchar(150),
    NR_PRECO                decimal(15,2),
    ID_PRODUTO_CATEGORIA    int,
    ID_PRODUTO_TIPO         int,
    ID_PRODUTO_IMAGEM       int,
    FOREIGN KEY (ID_PRODUTO_TIPO) REFERENCES TB_PRODUTO_TIPO(ID_PRODUTO_TIPO),
    FOREIGN KEY (ID_PRODUTO_CATEGORIA) REFERENCES TB_PRODUTO_CATEGORIA(ID_PRODUTO_CATEGORIA)
);

create table TB_PRODUTO_IMAGEM(
    ID_PRODUTO_IMAGEM	    int primary key auto_increment,
    IMG_PRODUTO		    varchar(800),
    ID_PRODUTO		    int,
    FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO)
);

create table TB_USUARIO(
    ID_USUARIO		int primary key auto_increment,
    NM_USUARIO		varchar(50),
    DS_RG		varchar(20),
    DS_CPF		varchar(20),
    DT_NASCIMENTO	date,
    DS_TELEFONE		varchar(20)
);

create table TB_USUARIO_LOGIN(
    ID_USUARIO_LOGIN		int primary key auto_increment,
    DS_EMAIL			varchar(100),
    DS_SENHA			varchar(40),
    bt_trocar           boolean,
    cod_reset           varchar(20),
    dt_expiracao_cod    datetime,
    ID_USUARIO			int,
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);

create table TB_USUARIO_FAVORITO(
    ID_USUARIO_FAVORITO		int primary key auto_increment,
    ID_PRODUTO			int,
    ID_USUARIO			int,
    FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO),
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);

create table TB_USUARIO_AVALIACAO(
    ID_USUARIO_AVALIACAO	int primary key auto_increment,
    DS_COMENTARIO		varchar(2000),
    NR_AVALIACAO		int,
    ID_USUARIO			int,
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);

create table TB_USUARIO_ENDERECO(
    ID_USUARIO_ENDERECO  	int primary key auto_increment,
    DS_CEP		        varchar(20),
    DS_RUA		        varchar(150),
    DS_CASA		        varchar(10),
    DS_REFERENCIA	        varchar(400),
    DS_COMPLEMENTO	        varchar(400),
    DS_BAIRRO		        varchar(50),
    DS_CIDADE		        varchar(30),
    DS_UF		        varchar(2),
    ID_USUARIO	                int,
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)  
);

create table tb_cupom (
	id_cupom        int primary key auto_increment,
    cod_cupom       varchar(200),
    vl_cupom        decimal(15, 2),
    qtd_restante    int
);

create table tb_pedido (
	id_pedido			int primary key auto_increment,
    id_usuario			int,
    id_usuario_endereco	int,
    id_cupom			int,
    dt_pedido			datetime,
    cod_nota_fiscal		varchar(200),
    tp_frete			varchar(200),
    vl_frete			decimal(15,2),
    ds_status			varchar(200),
    tp_pagamento		varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_usuario_endereco) references tb_usuario_endereco (id_usuario_endereco),
    foreign key (id_cupom) references tb_cupom (id_cupom)
);

create table tb_pedido_item (
	id_pedido_item		int primary key auto_increment,
    id_pedido			int,
    id_produto			int,
    qtd_itens			int,
    vl_produto			decimal(15,2),
    foreign key (id_pedido) references tb_pedido (id_pedido),
    foreign key (id_produto) references tb_produto (id_produto)
);

create table TB_PAGAMENTO_BOLETO(
    ID_PAGAMENTO_BOLETO	     int primary key auto_increment,
    COD_BOLETO		     int,
    ID_PEDIDO_ITEM	     int,
    FOREIGN KEY (ID_PEDIDO_ITEM) REFERENCES TB_PEDIDO_ITEM(ID_PEDIDO_ITEM)
);

create table TB_PAGAMENTO_PIX(
    ID_PAGAMENTO_PIX	   int primary key auto_increment,
    COD_PIX		   int,
    ID_PEDIDO_ITEM	   int,
    FOREIGN KEY (ID_PEDIDO_ITEM) REFERENCES TB_PEDIDO_ITEM(ID_PEDIDO_ITEM)
);

create table tb_pagamento_cartao (
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
    nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);

create table TB_ADMIN(
    ID_ADMIN		int primary key auto_increment,
    DS_EMAIL		varchar(100),
    DS_SENHA		varchar(40)
);


