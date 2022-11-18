import { useEffect, useState } from 'react'
import { mostrarPedidosUsuario } from '../../../api/usuario/pedidoAPI'
import storage from 'local-storage'
import './index.scss'
// import { API_URL } from '../../../api/config'


export default function ItemFavorito() {
    
    const [ pedidos, setPedidos ] = useState([])
    const lerStorage = storage('Cliente-Logado')

    async function mostrarPedidos(){
        const r = await mostrarPedidosUsuario(lerStorage.id)
        setPedidos(r)
    }

    useEffect(() => {
        mostrarPedidos()
    }, [])
    
    //  add no paranteses da função ^^ { item: {produto: { info, imagens }, qtd } 
    // function exibirImagem() {
    //     if(imagens.length > 0) {
    //         return API_URL + '/' + imagens[0];
    //     }else {
    //         return '/image/imagespadrao.png'
    //     }
    // }

    return (
                
                
                <div className='itens-carrinho'>
                {pedidos.map( item =>
                <div>
                    <img src="/image/imagespadrao.png" className='imagem-produto-no-carrinho' alt='img-produto-carrinho' /> 
                    <div className='item-nome-e-detalhes-e-preco'>
                        <div className='sobre-produto-favorito'>
                            <h1 className='nome-produto-carrinho'>{item.nome}</h1>         
                            <p className='descricao-produto-carrinho'>{item.modelo}</p>    
                        </div>
                        <h3>Pedido nº{item.id}</h3> 
                    </div>
                     <div className='botao-e-lixo'>
                        <button className='botao-comprar-favorito'>
                            <p className='comprar-e-config-img'>
                                <img src='/image/carrinho-card.png' className='imagem-carrinho' alt='carrinho-favorito'/>Comprar
                            </p>
                        </button>
                        <img src='image/lixeira-favorito.png' className='lixo-favorito' alt='lixo-favorito'/>

                    </div> 
                    
                </div>    
                )}
               </div>
)}
