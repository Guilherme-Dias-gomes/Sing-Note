import ItemFavorito from '../../../components/usuario/item-favorito'
import { useEffect, useState } from 'react'
import { mostrarPedidosUsuario } from '../../../api/usuario/pedidoAPI'
import storage from 'local-storage'
import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import { API_URL } from '../../../api/config'

export default function FavoritosProduto() {

    const [ pedidos, setPedidos ] = useState([])
    const [ itens, setItens ] = useState([])
    const lerStorage = storage('Cliente-Logado')

    async function mostrarPedidos(){
        const r = await mostrarPedidosUsuario(lerStorage.id)
        setPedidos(r)
    }

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

    useEffect(() => {
        mostrarPedidos()
    }, [])
    
    return (
        <div className='page-favorito-usu'>
            <div className='bola1favorito'></div>
            <div className='bola2favorito'></div>
            <div className='bola3favorito'></div>
            <AbaLateralUSU />
            <div className='elementos-favorito-usu'>
                <div className='elemento-cabecalho-favorito'>
                    <CabecalhoUSU />
                    <div className='titulo-e-barra-de-itens-favoritos'>
                        <p className='titulo-e-coracao'><img src='/image/coracao-card.png'/> Favoritos</p>
                        <div className='card-itens-do-favorito'>
                            <div className='itens-do-favorito'>
                            {pedidos.map( item =>
                            <div className='itens-carrinho'>
                                
                                
                                    <img src={exibirImagem(item.imagem)} className='imagem-produto-no-carrinho' alt='img-produto-carrinho' /> 
                                    <div className='item-nome-e-detalhes-e-preco'>
                                        <div className='sobre-produto-favorito'>
                                            <h1 className='nome-produto-carrinho'>{item.nome}</h1>         
                                            <p className='descricao-produto-carrinho'>{item.modelo}</p>    
                                        </div>
                                        <h3>Situa????o: <span className='corDiferente'>{item.status}</span> </h3>
                                        <div>
                                            <h3>Data do Pedido: <span className='corDiferente'>{item.Data_Pedido}</span></h3>
                                            <h3>Pedido n?? <span className='corDiferente'>{item.id}</span></h3>     
                                        </div>
                                    </div>
                                    {/* <div className='botao-e-lixo'>
                                        <button className='botao-comprar-favorito'>
                                            <p className='comprar-e-config-img'>
                                                <img src='/image/carrinho-card.png' className='imagem-carrinho' alt='carrinho-favorito'/>Comprar
                                            </p>
                                        </button>
                                        <img src='image/lixeira-favorito.png' className='lixo-favorito' alt='lixo-favorito'/>

                                    </div>  */}
                                    
                            </div>
                            )}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}