import './pedido.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import Cabecalho from '../../../components/adm/cabecalho-adm'


export default function pagePedidos () {



    return(
        <main className='pagePedidos'>
        <AbaLateralADM/>
        
        <div className='elemento-pedidos'>
            <Cabecalho/>
            <div className='elementos-pesquisa'>  
                <div className='barra-de-pesquisa'>
                    <input className='input-pesquisa' type="search" placeholder='Buscar por nome' ></input>
                    <button className='botao-barra-busca-adm'><img src='/image/lupa-usu-busca.png' alt='lupa-botao'/></button>
                </div>
                <button className='btn-buscar'>Buscar</button>
            </div>
            <div className='div-table'>
                <table className='tabela-pedidos-adm'>
                    <thead className='cabecalho-tabela-pedido'>
                        <tr className='linha-titulos-cabecalho-tabela'>
                            <th className='titulo-cabecalho-tabela-id'>ID</th>
                            <th className='titulo-cabecalho-tabela-usuario'>Usuário</th>
                            <th className='titulo-cabecalho-tabela-cpf'>CPF</th>
                            <th className='titulo-cabecalho-tabela-status'>Status</th>
                            <th className='titulo-cabecalho-tabela-data'>Data</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr className='linha-descricao-cabecalho-tabela'>
                            <td className='linha-cabecalho-tabela-id'>1</td>
                            <td className='linha-cabecalho-tabela-usuario'>Maria</td>
                            <td className='linha-cabecalho-tabela-cpf'>756.267.821.14</td>
                            <td className='linha-cabecalho-tabela-status'>Status</td>
                            <td className='linha-cabecalho-tabela-id-data'>Data</td>
                        </tr>
                        <tr className='linha-descricao-cabecalho-tabela'>
                            <td className='linha-cabecalho-tabela-id'>2</td>
                            <td className='linha-cabecalho-tabela-usuario'>Pedro</td>
                            <td className='linha-cabecalho-tabela-cpf'>528.928.182.11</td>
                            <td className='linha-cabecalho-tabela-status'>Status</td>
                            <td className='linha-cabecalho-tabela-id-data'>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    )
}