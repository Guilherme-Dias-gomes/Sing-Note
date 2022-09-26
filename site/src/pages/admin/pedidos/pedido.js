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
                <input className='input-pesquisa' type="search" placeholder='Buscar por nome' ></input>
                <button className='btn-buscar'>Buscar</button>
            </div>
            <div className='div-table'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuário</th>
                            <th>CPF</th>
                            <th>Status</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Maria</td>
                            <td>756.267.821.14</td>
                            <td>Status</td>
                            <td>Data</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pedro</td>
                            <td>528.928.182.11</td>
                            <td>Status</td>
                            <td>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    )
}