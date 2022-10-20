import './index.scss'
// import { API_URL } from '../../../api/config'


export default function ItemFavorito() { 
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
                    <img src="/image/imagespadrao.png" className='imagem-produto-no-carrinho' alt='img-produto-carrinho' /> {/*<---- add no src da imagem {exibirImagem}*/}
                    <div className='item-nome-e-detalhes-e-preco'>
                        <div className='sobre-produto-favorito'>
                            <h1 className='nome-produto-carrinho'>nome-aqui</h1>         {/*<---- add ali {info.Nome}*/}
                            <p className='descricao-produto-carrinho'>modelo-aqui uuuuuuuuuuuuuuuuuiiii</p>    {/*<---- add ali {info.Modelo}*/}
                        </div>
                        <h3>R$ 123</h3> {/*<---- add ali {info.Preco}*/}
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
    )
}
