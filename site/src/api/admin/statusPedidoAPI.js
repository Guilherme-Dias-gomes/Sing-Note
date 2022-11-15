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
    const r = await api.get(`/pedido/buscar?nome=${nome}`);
    return r.data;
}

export async function buscarPedidosPorId(id) {
    const r = await api.get(`/buscar/pedido/${id}`);
    console.log(r.produto)
    return r.data;
}

export async function alterarPedido(Status, id){
    const resposta = await api.put('/alterar/status/' + id, { Status })
}