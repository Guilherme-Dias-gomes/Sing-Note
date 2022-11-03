import { API_URL } from '../config'

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function addFavoritos(idProduto, idUsuario){
    const r = await api.post('/favoritos')
}