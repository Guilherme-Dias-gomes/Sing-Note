import './consulta.scss'

import { toast } from 'react-toastify';

import CabecalhoAdm from '../../../components/adm/cabecalho-adm'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import ElementoProduto from '../../../components/adm/elemento-produto'

export default function consultaProduto () {

    async function removerProduto(id) {
        try {
            await removerProduto(id);
            toast.dark('Produto Removido com sucesso 🎶')
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        <main className='page-consulta'>
            <AbaLateralADM/>
            <div className='elementos-consulta'>
                <CabecalhoAdm/>
                <div className='elementos-pesquisa'>  
                    <input className='input-pesquisa' type="search" placeholder='Buscar por nome' ></input>
                    <button className='btn-buscar'>Buscar</button>
                </div>
                <div className='cards-produto'>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                    <ElementoProduto/>
                </div>
            </div>
            
        </main>
    )
}