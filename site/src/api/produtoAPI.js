import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(nome, modelo, categoria, tipo, descricao, estoque, marca, preço) {
    const r = await api.post('/admin/produto', { nome, modelo, categoria, tipo, descricao,  preco});
    return r.data;
}