import { Router } from "express";
import { listarEnderecoUsuario, salvarEnderecoUsuario } from "../../repository/usuario/enderecoRepository.js";

const server = Router();

// Listar endereço de um usuario
server.get('/api/usuario/:id/endereco', async (req, resp)  => {
    try {
        const id = req.params.id;
        const r = await listarEnderecoUsuario(id);
        resp.send(r);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

// Cadastrado endereços de um usuario
server.post('/api/usuario/:idUsuario/endereco', async (req, resp)  => {
    try {
        const id = req.params.idUsuario;
        const endereco = req.body;

        const r = await salvarEnderecoUsuario(id, endereco)
        resp.status(204).send();
        console.log(id)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;