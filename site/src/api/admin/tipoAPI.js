import { API_URL } from '../config';

import axios from 'axios'
const api = axios.create({
    baseURL : API_URL
})

export async function listarTipos() {
    const r = await api.get('/produto/tipo');
    return r.data;
}

export async function buscarProdutoPorTipo(id){
    const resp = await api.get(`/usuario/produtos/buscar/tipo?id=${id}`)
    return resp.data
}