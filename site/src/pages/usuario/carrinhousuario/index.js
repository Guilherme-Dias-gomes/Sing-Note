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
            <div className='bola1carrinho'></div>
            <div className='bola2carrinho'></div>
            <div className='bola3carrinho'></div>
            <AbaLateralUSU />
            <div className='elementos-carrinho-usu'>
                <div className='elemento-cabecalho-carro'>
                    <CabecalhoUSU />
                    <div className='procedimentos-carrinho'>
                        <div className='Circulo-porcento1'>
                            <div className='Circulo-porcento3'></div>
                            <div className='Circulo-porcento2'></div>
                        </div>
                        <img src='/image/carrinho-procedimento.png' className='icones-procedimento' />
                        <img src='/image/setinha.png' className='setinha-procedimento' />
                        <img src='/image/user-usu.png' className='icones-procedimento' />
                        <img src='/image/setinha.png' className='setinha-procedimento' />
                        <img src='/image/cartao-do-banco.png' className='icones-procedimento' />
                        <img src='/image/setinha.png' className='setinha-procedimento' />
                        <img src='/image/olho-visivel.png' className='icones-procedimento' />
                        <img src='/image/setinha.png' className='setinha-procedimento' />
                        <img src='/image/simbolo-verificado.png' className='icones-procedimento' />
                    </div>

                </div>
                {itens.map(item =>
                    <ItemCarrinho item={item} />
                )}
            </div>
        </div>
    )
}