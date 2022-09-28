import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})




export async function login(email, senha){
    const resposta = await api.post('/login/admin', {
        email:email,
        senha:senha
    });

    return resposta.data
}