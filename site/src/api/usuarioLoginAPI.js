import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function loginUsuario(email, senha){
    const resposta = await api.post('/usuario/login', {
        email:email,
        senha:senha
    });

    return resposta.data
}

export async function ContarProdutos(){
    const resposta = await api.get('/usuario/contar/produto')
    return resposta.data
}