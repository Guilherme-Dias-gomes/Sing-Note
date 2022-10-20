import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'

import Storage from 'local-storage'
import { useState, useEffect } from 'react'
import { buscarProdutoPorId } from '../../../api/admin/produtoAPI'
import ItemCarrinho from '../../../components/usuario/itemCarrinho'

export default function CarrinhoUsuario() {
    const [itens, setItens] = useState([]);


    function calcValorTotal () {
        let total = 0;
        for(let item of itens) {
            total = total + item.produto.info.Preco * item.qtd
        }
        return total;
    }

    function removerItem (id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho(); 
    }

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
            console.log(temp)
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
                <div className='elemento-cabecalho-carrinho'>
                    <CabecalhoUSU />
                    <div className='procedimentos-carrinho-formatacao'>
                        <div className='procedimentos-carrinho'>
                            <div className='Circulo-porcento1'>
                                <div className='Circulo-porcento3'><h1 className='percentual-bolinha-carrinho'>25%</h1></div>
                                <div className='Circulo-porcento2'></div>
                            </div>
                            <img src='/image/carrinho-procedimento.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/user-usu.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/cartao-do-banco.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/olho-visivel.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/simbolo-verificado.png' className='icones-procedimento' alt='icn-carrinhos' />
                        </div>
                    </div>
                    
                    <div className='card-itens-do-carrinho-e-resultados'>
                        <div className='itens-do-carrinho-e-remover'>
                            <div className='formatacao-btn-remover'>
                                <button className='botao-remover'>
                                    <img src='/image/lixeira.png' alt='a'/>REMOVER TODOS OS PRODUTOS
                                </button>
                            </div>
                            {itens.map(item =>
                                <ItemCarrinho item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho}/>
                            )}
                        </div>
                        <div className='card-resumo'>
                            <div className='titulo-resumo-carrinho'>
                                <img src='/image/img-resumo.png' alt=''/>
                                <h1 className='tit-resumo'>Resumo</h1>
                            </div>
                        <div className='valor-total-div'>
                            <div className='valor-total-carrinho'>
                                Valor total: <span className='valor-mostrado-carrinho'> R${calcValorTotal()}</span>
                            </div>
                            <hr className='linha-abaixo-de-valor-carrinho'/>
                        </div>
                        <div className='div-botoes'>
                            <button className='botao-comprar-carrinho'>
                                <p className='efetuar-compra'>EFETUAR COMPRA</p>
                            </button>
                            <button className='botao-comprando-carrinho'>
                                <p className='continuar-comprando'>CONTINUAR COMPRANDO</p>
                            </button>
                        </div>
                        </div>
                    </div><RodapeUsuario/>
                </div>
                
            </div>
        </div>
    )
}