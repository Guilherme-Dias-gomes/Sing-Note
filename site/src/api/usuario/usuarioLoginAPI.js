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



export async function Logar(email, senha){
    const r = await api.post('/login', { email, senha });
    return r.data
}

export async function ContarProdutos(){
    const resposta = await api.get('/usuario/contar/produto')
    return resposta.data
}