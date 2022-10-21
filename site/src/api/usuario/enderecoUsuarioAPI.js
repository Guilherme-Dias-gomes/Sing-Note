import { API_URL } from '../config'

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function salvar (cepUsuario, cep, rua, casa, referencia, complemento, bairro, cidade, uf){
    const r = await api.post('/api/usuario/' +  cepUsuario  + '/endereco', {cep, rua, casa, referencia, complemento, bairro, cidade, uf });
    return r.data;
}

export async function listar (cepUsuario){
    const r = await api.get('/api/usuario/' +  cepUsuario  + '/endereco', {cep, rua, casa, referencia, complemento, bairro, cidade, uf });
    return r.data;
}