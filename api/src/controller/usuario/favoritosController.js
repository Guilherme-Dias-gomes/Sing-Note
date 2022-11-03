import { Router } from "express";
import { adicionarFavoritos } from "../../repository/usuario/favoritosRepository.js";

const server = Router();

server.post('/favoritos', async (req, resp) =>{
    try {   
        const favorito = req.query

        const addFavoritos = await adicionarFavoritos(favorito);

        resp.send({
            id: addFavoritos.id
        });
        
    } catch (err) {
        resp.status(400).send({ 
            erro:err.message
        })
    }
})

export default server;