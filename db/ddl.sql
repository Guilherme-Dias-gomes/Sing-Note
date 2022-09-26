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

create table TB_PEDIDO(
    ID_PEDIDO			int primary key auto_increment,
    TP_FORMA_DE_PAGAMENTO	varchar(50),
    DS_STATUS			varchar(50),
    VL_TOTAL			decimal(15,2),
    DT_PEDIDO			date,
    ID_USUARIO			int,
    ID_USUARIO_ENDERECO		int,
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO),
    FOREIGN KEY (ID_USUARIO_ENDERECO) REFERENCES TB_USUARIO_ENDERECO(ID_USUARIO_ENDERECO) 
);

create table TB_PEDIDO_ITEM(
    ID_PEDIDO_ITEM		int primary key auto_increment,
    ID_PEDIDO                   int,
    ID_PRODUTO			int,
    ID_USUARIO			int,
    FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO(ID_PEDIDO),
    FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO),
    FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
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

create table TB_PAGAMENTO_CARTAO(
    ID_PAGAMENTO_CARTAO 		int primary key auto_increment,
    NR_CARTAO				int,
    NM_NOME_IMPRESSO_NO_CARTAO		varchar(100),
    DT_VALIDADE				date,
    NR_CODIGO_DE_SEGURANCA	        int,
    DS_PARCELAS				varchar(300),
    ID_PEDIDO_ITEM			int,
    FOREIGN KEY (ID_PEDIDO_ITEM) REFERENCES TB_PEDIDO_ITEM(ID_PEDIDO_ITEM)
);

create table TB_ADMIN(
    ID_ADMIN		int primary key auto_increment,
    DS_EMAIL		varchar(100),
    DS_SENHA		varchar(40)
);