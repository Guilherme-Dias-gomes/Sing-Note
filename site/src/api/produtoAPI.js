import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function SalvarProduto(nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo) {
    const resposta = await api.post('/admin/produto', { nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo});
    return resposta.data;
}
export async function AlterarProduto(id, nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo) {
    await api.put('/admin/produto/' + id, { nome, modelo, descricao, estoque, marca, preco, idCategoria, idTipo});

}

export async function SalvarImagens(id, imagem1, imagem2) {
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);

    const resposta = await api.put(`/admin/produto/${id}/imagens`, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    return resposta.data;
}

export async function buscarProdutoPorNome(nome) {
    const r = await api.get(`/admin/produto/buscar?nome=${nome}`);
    return r.data;
}

export async function buscarProdutos() {
    const r = await api.get('/admin/produto');
    return r.data;
}

export async function buscarProdutoPorId(id) {
    const r = await api.get('/admin/produto/' + id);
    return r.data;
}

export async function removerProduto(id) {
    const r = await api.delete('/admin/produto/' + id);
    return r.data;
}
