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
                                    idCategoria,
                                    idTipo) {
    const resposta = await api.post('/admin/produto', { nome, 
                                                        modelo,
                                                        descricao, 
                                                        estoque, 
                                                        marca, 
                                                        preco,
                                                        idCategoria,
                                                        idTipo});
    console.log(resposta)
    
    return resposta.data;
}