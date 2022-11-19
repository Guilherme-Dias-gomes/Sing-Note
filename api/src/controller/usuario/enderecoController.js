import { Router } from "express";
import { listarEnderecoUsuario, salvarEnderecoUsuario } from "../../repository/usuario/enderecoRepository.js";
import { validarEnderecoCliente } from "../../service/enderecoClienteValidacao.js";

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
server.post('/api/usuario/:id/endereco', async (req, resp)  => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        await validarEnderecoCliente(endereco)

        const r = await salvarEnderecoUsuario(id, endereco)
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;