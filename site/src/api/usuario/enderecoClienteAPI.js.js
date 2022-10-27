import { API_URL } from '../config'

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function salvarEnderecoUsuario(idUsuario, cep, rua, casa, referencia, bairro, cidade, uf, complemento){
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', { cep, rua, casa, referencia, bairro, cidade, uf, complemento });
    return r.data
}

export async function listarEnderecoUsuario(idUsuario){
    const r = await api.get ('/api/usuario/' + idUsuario + '/endereco');
    return r.data
}
