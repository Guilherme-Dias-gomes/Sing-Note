
import { Router } from "express";
const server = Router (); 

server.get ('/api/usuario/:id/endereco', async (req, resp)=> {
try {

    const id = req.params.id;
    
    const r = await listar (id);

    resp.send (r); 



 }
 catch (err) {
    resp.status (400).send ({
        erro : err.menssage
     })

    }

}

server.get ('/api/usuario/:id/endereco', async (req, resp)=> {
    try {
    
        const id = req.params.id; 
        const endereco = req.body; 
        const r = await salvar (id,endereco.cep, endereco.rua, endereco.casa, endereco.referencia, endereco.complemento, endereco.bairro, endereco.cidade, endereco.uf );
            resp.status(204).send(); 
    
    
    
     }
     catch (err) {
        resp.status (400).send ({
            erro : err.menssage
         })
    
        }
    
    }
    
    




