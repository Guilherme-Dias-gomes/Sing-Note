import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());



server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));