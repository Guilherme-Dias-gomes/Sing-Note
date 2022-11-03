import { conexao } from "../conection.js";

export async function adicionarFavoritos(favorito){
    const comando =
    `insert into tb_usuario_favorito(id_produto, id_usuario)
                              values(?, ?) `

    const [resposta] = await conexao.query(comando, [favorito.idProduto, favorito.idUsuario]);
    favorito.id = resposta.insertId
    return favorito
}