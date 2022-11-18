import { useState } from 'react'
import './index.scss'

export default function CabecalhoAdm() {

    const [ admin, setAdmin ] = useState([]);
    
    return(
        
            <div className="cabecalho">  {/*Começo cabeçalho*/}
                <p className="nome-usuario"> Olá <span className="negrito-nome-usuario">Admin</span>, seja bem-vindo.</p>
                <div className='bolinha-inicial-nome-usuario'>
                    <h1 className="inicial-nome-usuario"> A </h1>
                </div>
            </div> /*Fim do cabeçalho*/
        
)}