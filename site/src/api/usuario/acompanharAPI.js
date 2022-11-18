import { API_URL } from "../config";

import axios from "axios";
const api = axios.create({
    baseURL: API_URL
})

export async function listarPedidos(idUsuario) {
    const r = await api.get ('/api/acompanhar/' + idUsuario );
    return r.data
}