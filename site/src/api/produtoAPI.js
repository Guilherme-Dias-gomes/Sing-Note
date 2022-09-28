import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function SalvarProduto(nome,
                                    modelo,
                                    descricao, 
                                    estoque, 
                                    marca, 
                                    preco,
                                    categoria,
                                    tipo) {
    const r = await api.post('/admin/produto', { nome, 
                                                 modelo,
                                                 descricao, 
                                                 estoque, 
                                                 marca, 
                                                 preco,
                                                 categoria,
                                                 tipo});
    return r.data;
}