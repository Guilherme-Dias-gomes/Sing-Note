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
    const [enderecos, setEnderecos] = useState([]);
    const [itens, setItens] = useState([])

    console.log(enderecos)
    console.log(itens)

    async function carregarEnderecos() {
        const id = Storage('Cliente-Logado').id
        const r = await listarEnderecoUsuario(id);
        setEnderecos(r)
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

    function carregarTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.qtd * item.produto.info.Preco
        }
        return total;
    }


    useEffect(() => {
        carregarEnderecos();
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
                    <div className='div-elementos-pagamento'>
                        <div className='div-endereco-pagamento'>
                            <div className='formatacao-btn-remover'>
                                <h1>Informações do seu pedido</h1>
                                <h3>valor final: {carregarTotal()}</h3>
                            </div>
                            <div className='enderecos'>

                                {enderecos.map(item =>
                                    <CardEndereco item={item} />
                                )}
                            </div>
                            <div>
                                <h2>Finalizar Compra</h2>
                                <div>
                                    nome:<input></input>
                                    número:<input></input>
                                    validade:<input></input>
                                    cvv:<input></input>
                                    Tipo do Pagamento:<select>
                                                        <option></option>
                                                        <option>Crédito</option>
                                                        <option>Débito</option>
                                                      </select>
                                    Parcelas<select>
                                                <option></option>
                                                <option value='1'>1X á vista</option>
                                                <option value='1'>1X sem juros</option>
                                                <option value='2'>2X sem juros</option>
                                                <option value='3'>3X sem juros</option>
                                            </select>
                                            Cupon: <input></input>
                                            Frete: <select>
                                                        <option></option>
                                                        <option value='normal'>Normal - R$10.00</option>
                                                        <option value='sedex'>Sedex - R$25.00</option>
                                                   </select>
                                </div>
                                <button>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <table>
                                <thead>
                                    <th>Item</th>
                                    <th>Quantidade</th>
                                    <th>Preço </th>
                                    <th>Total</th>
                                </thead>
                                <tbody>

                                    {itens.map(item =>
                                        <tr>
                                            <td>
                                                <div>
                                                    <img src='/image/imagespadrao.png' alt='imagem'></img>
                                                    <div>
                                                        <h3>{item.produto.info.Nome}</h3>
                                                        <h4>{item.produto.info.Modelo}</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.qtd}
                                            </td>
                                            <td>
                                                R${item.produto.info.Preco}
                                            </td>
                                            <td>
                                                R$ {item.qtd * item.produto.info.Preco}
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <RodapeUsuario />
                </div>

            </div>
        </div>
    )
}