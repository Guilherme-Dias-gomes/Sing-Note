import 'dotenv/config'

import loginUsuariocontroller from './controller/loginUsuariocontroller.js'
import adminController from './controller/adminController.js'
import produtoController from './controller/produtosController.js'
import categoriaController from './controller/categoriaController.js' 
import tipoController from './controller/tipoController.js' 
import consultaController from './controller/produtosController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(adminController)
server.use(produtoController)
server.use(categoriaController)
server.use(tipoController)
server.use(loginUsuariocontroller)
server.use(consultaController)

server.use('/storage/produto', express.static('storage/produto'));

server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));