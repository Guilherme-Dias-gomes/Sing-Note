import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../../api/config.js';
import { buscarProdutoPorId } from '../../../api/usuarioProdutoAPI.js'
import './index.scss'


export default function ProdutosDetalhes(){

    const [produto, setProduto] = useState({imagens:[], info:{} });

    const [imagemPrincipal, setImagemPrincipal] = useState(0)

    const { id } = useParams( )

    async function carregarPagina(){
        const resposta = await buscarProdutoPorId(id)
        console.log(resposta)
        setProduto(resposta)
    }

    function exibirImagemPrincipal(){
        if(produto.imagens.length > 0){
            return API_URL + '/' + produto.imagens[imagemPrincipal]
        }
        else {
            return '/image/imagespadrao.png'
        }
    }

    function exibirImagenProdutos(imagem){
        return API_URL + '/' + imagem
    }

    useEffect(() => {
        carregarPagina()
    }, [])
    return(
        <div>
            <h1>Welcome to detalhes dos produtos</h1>
            <img src={exibirImagemPrincipal()} className='teste'/>
            {produto.imagens.map((item, pos) =>
                <img src={exibirImagenProdutos(item)} onClick={() => setImagemPrincipal(pos)}/>
            )}
            <h2>{produto.info.Nome}</h2>
            <h2>{produto.info.Modelo}</h2>
            <h2>{produto.info.Marca}</h2>
            <h2>{produto.info.Estoque}</h2>
            <h2>{produto.info.Preco}</h2>
            <h2>{produto.info.EspecificacoesTecnicas}</h2>
        </div>
    )
}