import './home.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import Cabecalho from '../../../components/adm/cabecalho-adm'



export default function PageHome () {




    return(
        <main className='pageHome'>
            <AbaLateralADM/>
            
            <div className='espaco-branco'>
                <Cabecalho/>
            </div>
        </main>
    )
}