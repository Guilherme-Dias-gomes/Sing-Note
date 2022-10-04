import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function SalvarProduto(nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo) {
    const resposta = await api.post('/admin/produto', { nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo});
    return resposta.data;
}

export async function SalvarImagens(id, imagem1, imagem2) {
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);

    const resposta = await api.put(`/admin/produto/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return resposta.data;
}

export async function deletarProduto(id) {
    const r = await api.delete('admin/prdouto/' + id);
    return r.data;
}