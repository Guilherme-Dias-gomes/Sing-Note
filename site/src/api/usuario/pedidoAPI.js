import { API_URL } from '../config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async function salvarNovoPedido(idUsuario, novoPedido) {
    const r = await api.post(`/api/pedido/${idUsuario}` , novoPedido);
    return r.data;
}

export async function mostrarPedidosUsuario(idUsuario){
    const r = await api.get('/api/acompanhar/' + idUsuario)
    return r.data
}

