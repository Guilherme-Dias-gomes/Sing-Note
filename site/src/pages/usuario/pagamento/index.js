import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import { listarEnderecoUsuario } from '../../../api/usuario/enderecoClienteAPI.js'
import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import CardEndereco from '../../../components/usuario/cardEndereco'
import { buscarProdutoPorId } from '../../../api/admin/produtoAPI'
import { salvarNovoPedido } from '../../../api/usuario/pedidoAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ModalEndereco from '../../../components/usuario/modal-endereco'
import { API_URL } from '../../../api/config'
export default function Pagamento() {
    const [enderecos, setEnderecos] = useState([]);
    const [itens, setItens] = useState([])
    const [exibirEndereco, SetExibirEndereco] = useState(false)

    const [idEndereco, setIdEndereco] = useState()

    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');

    const navegar = useNavigate();

    async function fecharModal() {
        SetExibirEndereco(false)
    } 

    async function carregarEnderecos() {
        const id = Storage('Cliente-Logado').id
        const r = await listarEnderecoUsuario(id);
        setEnderecos(r)
    }

    async function exibirNovoEndereco() {
        SetExibirEndereco(true);
    }

    function fecharNovoEndereco () {
        SetExibirEndereco(false);
        carregarEnderecos();
    }

    // funcion excluirEndereco() {

    // }

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

    async function salvarPedido() {


        try {

            let produtos = Storage('carrinho')
            let id = Storage('Cliente-Logado').id

            let pedido =
            {
                cupom: cupom,
                frete: frete,
                idEndereco: idEndereco,
                tipoPagameno: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: vencimento,
                    codSeguranca: cvv,
                    formaPagamento: parcela,
                    parcelas: parcela
                },
                produtos: produtos
            }
            const r = await salvarNovoPedido(id, pedido);
            toast.dark('Pedido Salvo com Sucesso')
            Storage('carrinho', []);
            navegar('/usuario/busca')

        } catch (err) {
            toast.error(err.response.data.erro)
        }

    }

    useEffect(() => {
        carregarEnderecos();
        carregarItens();
    }, [])

    return (
        <div className='page-pagamento-usu'>
            <ModalEndereco exibir={exibirEndereco} fechar={fecharNovoEndereco} />
            <div className='bola2Pagamento'></div>
            <div className='bola3Pagamento'></div>
            <AbaLateralUSU />
            <div className='elementos-pagamento-usu'>
                <div className='elemento-cabecalho-carrinho'>
                    <CabecalhoUSU />
                    <div className='procedimentos-pagamento-formatacao'>
                        <div className='procedimentos-pagamento'>

                            {/* La disgreta de la config de la buela percentuar*/}
                            <div className='Circulo-pagamento-porcento1'>
                                <div className='Circulo-pagamento-porcento3'><h1 className='percentual-bolinha-carrinho'>80%</h1></div>
                                <div className='Circulo-pagamento-porcento2e2'></div>
                                <div className='Circulo-pagamento-porcento2e3'></div>
                            </div>

                            <img src='/image/carrinho-procedimento.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/user-usu.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/cartao-do-banco.png' className='icones-procedimento' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/olho-visivel.png' className='icones-procedimento-trans' alt='icn-carrinhos' />
                            <img src='/image/setinha.png' className='setinha-procedimento' alt='icn-carrinho-setas' />
                            <img src='/image/simbolo-verificado.png' className='icones-procedimento-trans' alt='icn-carrinhos' />
                        </div>
                    </div>

                    {/*------------------------------------------------------------------------------------------------------------------------------------------*/}

                    <div className='div-elementos-pagamento'> {/*Referente a pagamento*/}
                        <div className='div-endereco-pagamento'>
                            <div className='formatacao-btn-remover'>
                                <h1>Informações do seu pedido</h1>
                                <h3>valor final: {carregarTotal()}</h3>
                                <button onClick={exibirNovoEndereco} className='botao-novo-endereco-pgt'>Novo Endereço</button>
                            </div>
                            <div className='enderecos'>

                                {enderecos.map(item =>
                                    <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco}/>
                                )}
                            </div>
                        </div>

                        <div className='div-forma-de-pagamento'>
                            <h2 className='titulo-forma-de-pagamento'>Forma de pagamento</h2>

                            <div className='informacoes-forma-de-pagamento'>
                                <div className='informacoes-cartao'>

                                    <div className="formatacao-input-informacao-cartao">
                                        <label className='titulo-input-pagamento'>Nome impresso no cartão</label>
                                        <input className='input-pagamento' placeholder='ex: Guilherme Dias Gomes' value={nome} onChange={e => setNome(e.target.value)} />
                                    </div>
                                    <div className="formatacao-input-informacao-cartao">
                                        <label className='titulo-input-pagamento'>Número do cartão</label>
                                        <input className='input-pagamento' placeholder='ex: 0000 0000 0000 0000' value={numero} onChange={e => setNumero(e.target.value)} />
                                    </div>
                                    <div className='formatacao-input-informacao-cartao-pequeno'>
                                        <div className="formatacao-input-informacao-cartao">
                                            <label className='titulo-input-pagamento'>Validade</label>
                                            <input className='input-pagamento' placeholder='ex: 04/jul' value={vencimento} onChange={e => setVencimento(e.target.value)} />
                                        </div>
                                        <div className="formatacao-input-informacao-cartao">
                                            <label className='titulo-input-pagamento'>CVV</label>
                                            <input className='input-pagamento' placeholder='ex: 000' value={cvv} onChange={e => setCvv(e.target.value)} />
                                        </div>
                                    </div>
                                </div>


                                <div className='informacoes-pagamento'>
                                    <div className='formatacao-input-informacao-cartao-pequeno'>
                                        <div className='formatacao-input-informacao-cartao'>
                                            <label className='titulo-input-pagamento'>Tipo do Pagamento</label>
                                            <select className='input-pagamento' value={tipo} onChange={e => setTipo(e.target.value)}>
                                                <option></option>
                                                <option>Crédito</option>
                                                <option>Débito</option>
                                            </select>
                                        </div>
                                        <div className='formatacao-input-informacao-cartao'>
                                            <label className='titulo-input-pagamento'>Parcelas</label>
                                            <select className='input-pagamento' value={parcela} onChange={e => setParcela(e.target.value)}>
                                                <option></option>
                                                <option value='1'>1X á vista</option>
                                                <option value='1'>1X sem juros</option>
                                                <option value='2'>2X sem juros</option>
                                                <option value='3'>3X sem juros</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='formatacao-input-informacao-cartao'>
                                        <label className='titulo-input-pagamento'>Cupon</label>
                                        <input className='input-pagamento' value={cupom} onChange={e => setCupom(e.target.value)} />
                                    </div>
                                    <div className='formatacao-input-informacao-cartao'>
                                        <label className='titulo-input-pagamento'>Frete</label>
                                        <select className='input-pagamento' value={frete} onChange={e => setFrete(e.target.value)}>
                                            <option></option>
                                            <option value='normal'>Normal - R$10.00</option>
                                            <option value='sedex'>Sedex - R$25.00</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button onClick={salvarPedido} className="botao-finalizar-pgt">Finalizar Compra</button>
                        </div>
                    </div> {/*Referente a pagamento*/}

                    
                        
                        <table className='tabela-pedidos-adm'>
                            <thead className='cabecalho-tabela-pedido'>
                                <tr className='linha-titulos-cabecalho-tabela'>
                                    <th className='titulo-cabecalho-tabela-id'>Item</th>
                                    <th className='titulo-cabecalho-tabela-usuario'>Quantidade</th>
                                    <th className='titulo-cabecalho-tabela-cpf'>Preço</th>
                                    <th className='titulo-cabecalho-tabela-status'>Total</th>
                                </tr>
                            </thead>
                    
                    {itens.map(item =>
                        <tbody>
                            <tr className='linha-descricao-cabecalho-tabela'>
                                <td className='linha-cabecalho-tabela-id'><img className='imgpedido' src={exibirImagem(item.produto.imagens[0])} alt='imagem'/></td>
                                <td className='linha-cabecalho-tabela-status'> {item.qtd}</td>
                                <td className='linha-cabecalho-tabela-id-data'>R${item.produto.info.Preco} </td>
                                <td className='linha-cabecalho-tabela-id-data'>R${item.qtd * item.produto.info.Preco} </td>
                            </tr>
                        </tbody>
                    )}

                            {/* <table className='table-pedido-usuario'>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Quantidade</th>
                                        <th>Preço </th>
                                        <th>Total</th>
                                    </tr>
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

                                </tbody> */}
                            </table>
                        
                    
                    <RodapeUsuario />
                </div>

            </div>
        </div>
    )
}