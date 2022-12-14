import { BuscarTipoPorID } from "../repository/admin/tipoRepository.js";
import { BuscarCategoriaPorID } from "../repository/admin/categoriaRepository.js";

export async function validarProduto(produto) {
    if (produto.nome == undefined || produto.nome.trim() == '') {
        throw new Error('❌Nome do produto é obrigatório!');
    }
    else if (produto.modelo == undefined || produto.modelo.trim()  == '') {
        throw new Error('❌Molode do produto é obrigatório!');
    }
    else if (produto.descricao == undefined || produto.descricao.trim() == '') {
        throw new Error('❌Descrição do produto é obrigatório!');
    }
    else if (isNaN(produto.estoque) || produto.estoque.trim() <= 0) {
        throw new Error('❌Valor do estoque do produto é obrigatório!');
    }
    else if (produto.marca == undefined || produto.marca.trim() == '') {
        throw new Error('❌Marca do produto é obrigatório!');
    }
    else if (isNaN(produto.preco) || produto.preco <= 0) {
        throw new Error('❌Preço do produto é obrigatório!');
    }
    const categoria = await BuscarCategoriaPorID(produto.idCategoria);
    if (categoria == undefined) {
        throw new Error('❌Categoria do produto inválido!');
    }
    const tipo = await BuscarTipoPorID(produto.idTipo);
    if (tipo == undefined) {
        throw new Error('❌Tipo do produto inválido!');
    }
}

