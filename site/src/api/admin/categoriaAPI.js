import { API_URL } from '../config';
import axios from 'axios'

const api = axios.create({
    baseURL : API_URL
})

export async function listarCategorias() {
    const r = await api.get('/produto/categoria');
    return r.data
}

export async function buscarProdutoPorCategoria(id){
    const resp = await api.get(`/usuario/produtos/buscar/categoira?id=${id}`)
    return resp.data
}