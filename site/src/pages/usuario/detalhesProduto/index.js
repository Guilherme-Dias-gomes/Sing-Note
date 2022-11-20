import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../../api/config.js';
import { buscarProdutos } from '../../../api/admin/produtoAPI'
import { buscarProdutoPorId } from '../../../api/usuario/usuarioProdutoAPI.js'
import Storage from 'local-storage'
import './index.scss'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario/index.js';
import { toast } from 'react-toastify';


export default function ProdutosDetalhes() {

    const [produto, setProduto] = useState({ imagens: [], info: {} });

    const [imagemPrincipal, setImagemPrincipal] = useState(0)

    const { id } = useParams()

    async function carregarPagina() {
        const resposta = await buscarProdutoPorId(id)
        console.log(resposta)
        setProduto(resposta)
    }

    function exibirImagemPrincipal() {
        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal]
        }
        else {
            return '/image/imagespadrao.png'
        }
    }

    function exibirImagenProdutos(imagem) {
        return API_URL + '/' + imagem
    }


    function addNoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }
        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })
            Storage('carrinho', carrinho);
        }
        toast.dark('Produto adicionado ao carrinho🎶');
    }


    useEffect(() => {
        carregarPagina()
    }, [])

    const [produto1, setProduto1] = useState([]);

    function exibirImagem(imagem) {
        if (!imagem) {
            return '/image/imagespadrao.png';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }

    async function mostrarProdutos() {
        const resposta = await buscarProdutos();
        setProduto1(resposta);
    }

    useEffect(() => {
        mostrarProdutos();
    }, [])


    return (
        <div className='Pagina-detalhes-produto-usu'>
        <AbaLateralUSU/>
        <div className='Parte-dos-detalhes-produto-usu'>
            <CabecalhoUSU/>
            <div className='Caixa-produto-imagens-descricoes-usu'>
                <div className='div-imagens-detalhes-usu'>
                    <div className='container-imagens-seletoras'>
                        {produto.imagens.map((item, pos) =>
                            <img className='imagem2-produto' src={exibirImagenProdutos(item)} onClick={() => setImagemPrincipal(pos)} alt='img-produto2'/>
                        )}
                    </div>
                    <div className='imagem-selecionada-principal-carrinho-usu'>
                        <img src={exibirImagemPrincipal()} className='imagem1-produto' alt='img-produto'/>
                    </div>
                </div>
                    
                <div className='div-descricao-detalhes-usu'>
                    <div className='origem-e-coracao'>
                        <img src='/image/fundoLogo.png' className='coracao-detalhe-usu' alt='imagem-coracao'/>
                        <p className='origem-descricao'>Vendido por: <span className='origem-descricao-verde'>SingNote</span></p>
                    </div>
                    <div className='descricao-do-produto-card'>
                        <h2 className='descricao-tipo'>Produto: <span className='descricao-tipo-resultado'>{produto.info.Nome}</span></h2>
                        <h2 className='descricao-tipo'>Modelo: <span className='descricao-tipo-resultado'>{produto.info.Modelo}</span></h2>
                        <h2 className='descricao-tipo'>Marca: <span className='descricao-tipo-resultado'>{produto.info.Marca}</span></h2>
                        <h2 className='descricao-tipo'>Em Estoque: <span className='descricao-tipo-resultado'>{produto.info.Estoque} unidades</span></h2>
                        
                    </div>
                    <div className='preco-botao-carrinho'>
                        <h2 className='preco-detalhe-usu'><span className='descricao-tipo'>Preço: </span> R$ {produto.info.Preco}</h2>
                        <button className='botao-add-carrinho-detalhe-usu' onClick={addNoCarrinho}>Adicionar ao carrinho
                            <img src='/image/carrinho-card.png' alt='img-carrinho' className='img-carrinho'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='Caixa-produto-especificacoes-tecnicas-usu'>
                <h1 className='titulo-informacoes-tecnicas-usu'>Informações Técnicas:</h1>
                <p className='informacoes-tecnicas-usu'>{produto.info.EspecificacoesTecnicas}</p>
            </div>
            <div className='Caixa-voce-tambem-pode-gostar'>
                <h1 className='titulo-voce-tambem-pode-gostar'>você também pode gostar disso:</h1>

                <div className='itens-que-pode-gostar'> 
                
                {/* cards dos itens */}
                    {produto1.map(item=>
                    <div className='espaco-produto'>
                        <div className='quadrado-unidades'>
                            <p className='quadrado-texto'>Restam</p>
                            <p className='quadrado-qtd-unidade'> {item.Estoque}</p>
                            <p className='quadrado-texto'>Unid.</p>
                        </div>
                        <div className='formatacao-img-produto'>
                            <img src={exibirImagem(item.Imagem)} className="ImagemProdutoUsu" alt='teste'/>
                        </div>

                        <div className='descricao-card'>
                        
                            <h1 className='card-produto-descricao'>
                            {<span>{item.Nome} Guitarra solador</span> }
                            <span>{item.Marca} Spamuscular</span>
                            <span>{item.Modelo}terceiro elemento</span>
                            </h1>
                            <h1 className='preco-card'>R$ {item.Preco}</h1>
                            <button className='botao-comprar'>
                                Comprar
                            <img className='imagem-carrinho' src='/image/carrinho-card.png' alt='carrinho-do-card'/>
                            </button>
                        </div>

                    </div> )}

                    {/* fim dos cards dos itens */}
                </div>

            </div>
            <RodapeUsuario/>
        </div>
    </div>
    )
}