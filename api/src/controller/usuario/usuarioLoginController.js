import { alterarUsuarioLogin, alterarUsuarioPerfil, buscarLoginPorId, buscarPerfilPorId, cadastrarUsuario, cadastrarUsuarioLogin, loginUsuario } from '../../repository/usuario/usuarioLoginRepository.js'; 

import { Router } from "express";
import { validarPerfilCliente, validarLoginCliente } from '../../service/perfilClienteValidacao.js';
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

// Cadastrar Perfil(Dados Pessoais)
server.post('/usuario/perfil', async (req, resp) =>{
    try {
        const usuario = req.body

        await validarPerfilCliente(usuario)

        const perfilInserido = await cadastrarUsuario(usuario);

        resp.send({
            id: perfilInserido.id
        });
 
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
} )

//Cadastrar Perfil(Email, Senha, ...)
server.post('/login/:id', async (req, resp) =>{
    try{ 
        const id = req.params.id;
        const login = req.body

        await validarLoginCliente(login)

        const respota = await cadastrarUsuarioLogin(login, id)
        resp.send(respota)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }

} )

// Carregar Informações do Usuairo por ID(Para alteração)
server.get('/usuario/perfil/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const usuario = await buscarPerfilPorId(id);
        const login = await buscarLoginPorId(id);

        resp.send({
            info: usuario,
            login: login
        })
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

// Alterar Usuario Login
server.put('/login/:id', async (req, resp) => {
    try {   

        const { id } = req.params
        const login = req.body

        //await removerUsuarioLogin(id)

        await validarLoginCliente(login)

        const r = await alterarUsuarioLogin(id, login);

        if(resposta != 1)
            throw new Error('❌Usuario não encontrado')
        else 
        resp.status(204).send();
        

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

// Alterar Usuario Perfil
server.put('/usuario/perfil/:id', async (req, resp) =>{
    try {   

        const { id } = req.params
        const  usuario = req.body 

        await validarPerfilCliente(usuario)

        const resposta = await alterarUsuarioPerfil(id, usuario);

        // if(resposta != 1)
        //     throw new Error('❌Usuario não encontrado')
        // else 
            resp.status(204).send(resposta);
        

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})




// Quantificar Todos os produtos
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