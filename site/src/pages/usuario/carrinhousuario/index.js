import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'

import Storage from 'local-storage'
import { useState, useEffect } from 'react'
import { buscarProdutoPorId } from '../../../api/admin/produtoAPI'
import ItemCarrinho from '../../../components/usuario/itemCarrinho'

export default function CarrinhoUsuario() {
    const [itens, setItens] = useState([]);

    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);

                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            setItens(temp)
        }
    }

    useEffect(() => {
        carregarCarrinho();
    }, [])



    return (
        <div className='page-carrinho-usu'>
            {/* <div className='bola1carrinho'></div> */}
            <div className='bola2carrinho'></div>
            <div className='bola3carrinho'></div>
            <AbaLateralUSU />
            <div className='elementos-carrinho-usu'>
                <div className='elemento-cabecalho-carro'>
                    <CabecalhoUSU />
                    <div className='procedimentos-carrinho-formatacao'>
                        <div className='procedimentos-carrinho'>
                            <div className='Circulo-porcento1'>
                                <div className='Circulo-porcento3'><h1 className='percentual-bolinha-carrinho'>25%</h1></div>
                                <div className='Circulo-porcento2'></div>
                            </div>
                            <img src='/image/carrinho-procedimento.png' className='icones-procedimento' alt='icn-carrinhos'/>
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas'/>
                            <img src='/image/user-usu.png' className='icones-procedimento' alt='icn-carrinhos'/>
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas'/>
                            <img src='/image/cartao-do-banco.png' className='icones-procedimento' alt='icn-carrinhos'/>
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas'/>
                            <img src='/image/olho-visivel.png' className='icones-procedimento' alt='icn-carrinhos'/>
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas'/>
                            <img src='/image/simbolo-verificado.png' className='icones-procedimento' alt='icn-carrinhos'/>
                        </div>
                    </div>

                    <div className='card-itens-do-carrinho-e-resultados'>
                        <div className='itens-do-carrinho-e-remover'>
                            <div className='formatacao-btn-remover'>
                                <button className='botao-remover'><img src='/image/lixeira.png'/>REMOVER TODOS OS PRODUTOS</button>
                            </div>
                            <div className='itens-carrinho'>
                                <img src='/image/imagespadrao.png' className='imagem-produto-no-carrinho' alt='img-produto-carrinho'/>
                                <div className='item-nome-e-detalhes'>
                                    <h1 className='nome-produto-carrinho'>Colocar nome aqui</h1>
                                    <p className='descricao-produto-carrinho'>Colocar descrições do produto</p>    
                                </div>
                               
                            </div> 
                            
                            <hr className='linha-azul-carrinho'/>


                        </div>

                        <div className='card-resumo'>
                            <div className='titulo-resumo-carrinho'>
                                <img src='/image/img-resumo.png'/>
                                <h1 className='tit-resumo'>Resumo</h1>
                            </div>
                            <div className='valor-total-carrinho'>Valor total: <span className='valor-mostrado-carrinho'> R$ valor aqui</span></div>
                            <hr/>
                            <button className='botao-comprar-carrinho'>
                                EFETUAR COMPRA
                            </button>
                            <button className='botao-comprando-carrinho'>
                                EFETUAR COMPRA
                            </button>
                        </div>

                    </div>
                </div>
                {itens.map(item =>
                    <ItemCarrinho item={item} />
                )}
            </div>
        </div>
    )
}