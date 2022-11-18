import './index.scss'
import storage from 'local-storage'

export default function CabecalhoUSU() {

    const lerNome = storage('Cliente-Logado').nome
    
    return(
    <div className="cabecalho-usuario">  {/*Começo cabeçalho*/}
            <div className='imagem-nome'>
                <img src="/image/logo-sing.png" alt='logo-sing'/>
                <p className="titulo-sing"> Sing Note</p>
            </div>
            <div className="inicial-nome-usu"> {lerNome.substr(0, 1)} </div>
        </div> /*Fim do cabeçalho*/

)}