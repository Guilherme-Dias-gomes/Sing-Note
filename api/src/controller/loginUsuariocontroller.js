import { loginUsuario } from '../repository/usuariorepository.js'; 

import { Router } from "express";
const server = Router();

// login do usuario

server.post('/usuario/login', async (req, resp)  => {
    try {
        const { email, senha } = req.body;
        const resposta = await loginUsuario(email, senha);
        if (!resposta)
        throw new Error ('Credenciais inválidas');

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;