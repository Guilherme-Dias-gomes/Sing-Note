import { API_URL } from './config';

import axios from 'axios'
const SN = axios.create({
    baseURL : API_URL
})

export async function listarTipos() {
    const r = await SN.get('/api/tipo');
    return r.data;
}