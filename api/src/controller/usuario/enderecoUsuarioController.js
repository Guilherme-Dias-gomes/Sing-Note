import { listar, salvar } from "../../repository/usuario/enderecoRepository.js"

import { Router } from "express";
const server = Router (); 

server.get ('/api/usuario/:cep/endereco', async (req, resp)=> {
try {

    const cep = req.params.cep;
    
    const r = await listar (cep);

    resp.send (r); 



 } catch (err) {
        resp.status (400).send ({
            erro : err.menssage
        })
    }

} )

server.post ('/api/usuario/:cep/endereco', async (req, resp)=> {
    try {
    
        const cep = req.params.cep; 
        const endereco = req.body; 
        const r = await salvar (cep,endereco.cep, endereco.rua, endereco.casa, endereco.referencia, endereco.complemento, endereco.bairro, endereco.cidade, endereco.uf );
            resp.status(204).send(); 
    
    
    
     }
     catch (err) {
        resp.status (400).send ({
            erro : err.menssage
         })
    
        }
    
    }
    
)

export default server;