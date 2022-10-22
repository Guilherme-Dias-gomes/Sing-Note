import { loginAdmin } from '../../repository/admin/adminRepository.js'; 

import { Router } from "express";
const server = Router();

// login do ADM

server.post('/admin/login', async (req, resp)  => {
    try {
        const { email, senha } = req.body;
        const resposta = await loginAdmin(email, senha);
        if (!resposta)
        throw new Error ('Credenciais inválidas');

        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;