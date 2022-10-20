import './index.scss'
import { API_URL } from '../../../api/config'


export default function ItemCarrinho({ item: {produto: { info, imagens }, qtd } }) {

    function exibirImagem() {
        if(imagens.length > 0) {
            return API_URL + '/' + imagens[0];
        }else {
            return '/image/imagespadrao.png'
        }
    }

    return (
        <div className='card-itens-do-carrinho-e-resultados'>
            <div className='itens-do-carrinho-e-remover'>
                <div className='formatacao-btn-remover'>
                    <button className='botao-remover'>
                        <img src='/image/lixeira.png' alt='a'/>REMOVER TODOS OS PRODUTOS
                    </button>
                </div>
                <div className='itens-carrinho'>
                    <img src={exibirImagem} className='imagem-produto-no-carrinho' alt='img-produto-carrinho' />
                    <div className='item-nome-e-detalhes'>
                        <h1 className='nome-produto-carrinho'>{info.Nome}</h1>
                        <p className='descricao-produto-carrinho'>{info.Modelo}</p>
                    </div>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>excluir</p>
                    </div>
                    <h3>R${info.Preco}</h3>
                </div>

                <hr className='linha-azul-carrinho' />


            </div>

            <div className='card-resumo'>
                <div className='titulo-resumo-carrinho'>
                    <img src='/image/img-resumo.png' alt=''/>
                    <h1 className='tit-resumo'>Resumo</h1>
                </div>
                <div className='valor-total-carrinho'>Valor total: <span className='valor-mostrado-carrinho'> R$ valor aqui</span></div>
                <hr />
                <button className='botao-comprar-carrinho'>
                    EFETUAR COMPRA
                </button>
                <button className='botao-comprando-carrinho'>
                    EFETUAR COMPRA
                </button>
            </div>

        </div>
    )
}
