import 'dotenv/config'

import adminController from './controller/adminController.js'
import produtoController from './controller/produtosController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(adminController)
server.use(produtoController)


server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));