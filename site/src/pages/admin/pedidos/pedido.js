import './pedido.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import Cabecalho from '../../../components/adm/cabecalho-adm'
import { useEffect, useState } from 'react'
import { buscarTodosPedidos, buscarPedidosPorNome } from '../../../api/admin/statusPedidoAPI'
import { useNavigate } from 'react-router-dom'


export default function PagePedidos() {

    const [ pedido, setPedido ] = useState([]);
    const [ buscar, setBuscar ] = useState('')

    const navegar = useNavigate()

    async function carregarPedidos(){
        const r = await buscarTodosPedidos();
        setPedido(r);
    }

    async function alterarStatus(id){
        navegar(`/admin/pedidos/status/${id}`)
    }

    async function filtrarPedido(){
        const r = await buscarPedidosPorNome(buscar)
        setPedido(r)
    }

    useEffect(() => {
        carregarPedidos()
    }, []);

    return(
        <main className='pagePedidos'>
        <AbaLateralADM/>
        
        <div className='elemento-pedidos'>
            <Cabecalho/>
            <div className='elementos-pesquisa'>  
                <div className='barra-de-pesquisa'>
                    <input 
                        className='input-pesquisa' 
                        type="search" 
                        placeholder='Buscar por nome'
                        value={buscar}
                        onChange={e => setBuscar(e.target.value)}
                        onKeyPress={e => e.key == 'Enter' ? filtrarPedido() : ''}></input>
                    <button 
                        className='botao-barra-busca-adm'
                        onClick={filtrarPedido}><img src='/image/lupa-usu-busca.png' alt='lupa-botao'/></button>
                </div>
                <button className='btn-buscar' onClick={filtrarPedido}>Buscar</button>
            </div>
            <div className='div-table'>
                <table className='tabela-pedidos-adm'>
                    <thead className='cabecalho-tabela-pedido'>
                        <tr className='linha-titulos-cabecalho-tabela'>
                            <th className='titulo-cabecalho-tabela-id'>Nº Pedido</th>
                            <th className='titulo-cabecalho-tabela-usuario'>Usuário</th>
                            <th className='titulo-cabecalho-tabela-cpf'>CPF</th>
                            <th className='titulo-cabecalho-tabela-status'>Status</th>
                            <th className='titulo-cabecalho-tabela-data'>Data</th>
                        </tr>
                    </thead>
                    
                    {pedido.map(item =>
                        <tbody>
                            <tr className='linha-descricao-cabecalho-tabela'>
                                <td className='linha-cabecalho-tabela-id'>{item.ID}</td>
                                <td className='linha-cabecalho-tabela-usuario'>{item.Nome}</td>
                                <td className='linha-cabecalho-tabela-cpf'>{item.CPF}</td>
                                <td className='linha-cabecalho-tabela-status'>{item.Situacao_do_Pedido}</td>
                                <td className='linha-cabecalho-tabela-id-data'>
                                    {item.Data_do_Pedido.substr(0, 10)} 
                                    <img src='/image/lapis.png' onClick={() => alterarStatus(item.ID)} alt='lapis'/>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    </main>
    )
}