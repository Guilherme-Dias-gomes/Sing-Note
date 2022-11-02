import { API_URL } from '../config'

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function cadastarPerfil(nomeUsuario, rg, cpf, nascimento, telefone){
    const resposta = await api.post('/usuario/perfil', { nomeUsuario, rg, cpf, nascimento, telefone }) 
    return resposta.data;
}

export async function cadastarLogin(email, senha, id){
    const resposta = await api.post('/login/' + id, { email, senha, id }) 
    return resposta.data;
}

export async function buscarUsuarioPorId(id){
    const resposta = await api.get('/usuario/perfil/' + id) 
    return resposta.data;
}

export async function alterarPerfil(nomeUsuario, rg, cpf, nascimento, telefone, id){
    const resposta = await api.put('/usuario/perfil/' + id, { nomeUsuario, rg, cpf, nascimento, telefone, id }) 
    //return resposta.data;
}

export async function alterarLogin(email, senha, id){
    const resposta = await api.put('/login/' + id, { email, senha, id }) 
    //return resposta.data;
}

export async function Logar(email, senha){
    const r = await api.post('/login', { email, senha });
    return r.data
}

export async function ContarProdutos(){
    const resposta = await api.get('/usuario/contar/produto')
    return resposta.data
}