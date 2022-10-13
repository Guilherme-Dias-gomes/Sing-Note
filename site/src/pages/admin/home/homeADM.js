import './home.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import CabecalhoAdm from '../../../components/adm/cabecalho-adm'



export default function PageHome () {


    return(
        <main className='pageHome'>
            <AbaLateralADM/>
            
            <div className='elementos-home'>
                <CabecalhoAdm/>
                <div className='espaco-branco'>
                    
                </div>
            </div>
        </main>
    )
}