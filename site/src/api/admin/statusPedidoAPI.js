import { API_URL } from '../config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function buscarTodosPedidos(){
    const r = await api.get('/buscar/pedido');
    return r.data;
}

export async function buscarPedidosPorNome(nome) {
    const r = await api.get(`/buscar/pedido/buscar?nome=${nome}`);
    return r.data;
}