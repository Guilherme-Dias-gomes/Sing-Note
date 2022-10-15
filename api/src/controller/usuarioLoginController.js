import { loginUsuario, QuantificarTodosProdutos } from '../repository/usuarioLoginRepository.js'; 

import { Router } from "express";
const server = Router();

// login do usuario

server.post('/login', async (req, resp)  => {
    try {
        const { email, senha } = req.body;
        const resposta = await loginUsuario(email, senha);

        if (!resposta)
            throw new Error ('Credenciais inválidas');

        resp.send({
            id: resposta.id,
            nome: resposta.nome
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/usuario/contar/produto', async (req, resp) => {
    try {
        
        const resposta = await QuantificarTodosProdutos();
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;