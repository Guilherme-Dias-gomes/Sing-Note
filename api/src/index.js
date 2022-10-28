import 'dotenv/config'

import Usuariocontroller from './controller/usuario/usuarioLoginController.js'
import UsuarioProdutoController from './controller/usuario/usuarioProdutoController.js'

import adminController from './controller/admin/adminController.js'
import produtoController from './controller/admin/produtosController.js'
import categoriaController from './controller/admin/categoriaController.js' 
import tipoController from './controller/admin/tipoController.js' 
import consultaController from './controller/admin/produtosController.js'
import enderecoController from './controller/usuario/enderecoController.js'
import pedidoController from './controller/usuario/pedidoController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(Usuariocontroller)
server.use(UsuarioProdutoController)
server.use (enderecoController)

server.use(adminController)
server.use(produtoController)
server.use(categoriaController)
server.use(tipoController)
server.use(consultaController)
server.use(pedidoController)


server.use('/storage/produto', express.static('storage/produto'));

server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));