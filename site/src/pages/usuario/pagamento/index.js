import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import { listarEnderecoUsuario } from '../../../api/usuario/enderecoClienteAPI.js'
import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import CardEndereco from '../../../components/usuario/cardEndereco'
import { buscarProdutoPorId } from '../../../api/admin/produtoAPI'

export default function Pagamento() {
    const [ endereco, setEndereco ] = useState([]);
    const [ itens, setItens ] = useState([])

    console.log(itens)

    async function carregarEndereco() {
        const id = Storage('Clinte-Logado').id
        const r = await listarEnderecoUsuario(id);
        setEndereco(r)
    }

    async function carregarItens() {
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
        carregarEndereco();
        carregarItens();
    }, [])

    return (
        <div className='page-pagamento-usu'>
            <div className='bola2Pagamento'></div>
            <div className='bola3Pagamento'></div>
            <AbaLateralUSU />
            <div className='elementos-pagamento-usu'>
                <div className='elemento-cabecalho-carrinho'>
                    <CabecalhoUSU />
                    <div className='procedimentos-carrinho-formatacao'>
                        <div className='procedimentos-carrinho'>
                            <div className='Circulo-porcento1'>
                                <div className='Circulo-porcento3'><h1 className='percentual-bolinha-carrinho'>80%</h1></div>
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
                                <h1>Informações do seu pedido</h1>
                            </div>
                            <div className='Endereco'>

                                {endereco.map(item =>
                                    <CardEndereco item={item} />
                                )}
                            </div>
                        </div>
                        <div className='card-resumo'>
                            <div className='titulo-resumo-carrinho'>
                            </div>
                            <div className='valor-total-div'>
                                <div className='valor-total-carrinho'>
                                    Valor total: <span className='valor-mostrado-carrinho'> R$</span>
                                </div>
                                <hr className='linha-abaixo-de-valor-carrinho' />
                            </div>
                            <div className='div-botoes'>
                                <button className='botao-comprando-carrinho'>
                                    <p className='continuar-comprando'>CONTINUAR COMPRANDO</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h2>Finalizar Compra</h2>
                                <div>
                                    nome:<input></input>
                                    número:<input></input>
                                    validade:<input></input>
                                    cvv:<input></input>
                                </div>
                                <button>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                    <RodapeUsuario />
                </div>

            </div>
        </div>
    )
}