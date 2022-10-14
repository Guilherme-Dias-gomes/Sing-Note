import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function AbaLateralUSU() {

    const navegar = useNavigate();

    function sairClick () {
        storage.remove('usuario-logado');
        navegar('/admin/login')
    }
    
    useEffect(() => {
        if(!storage('usuario-logado')){
            navegar('/usuario/login');
        }
        
    }, [])

return(

<div className="aba-lateral-usu"> {/*Começo da aba lateral*/} 
    <div className="icone-opcoes-usu" onClick={sairClick}>
        <p className="nome-icones"> &lt; Voltar</p>
    </div> 
        <div className="opcoes-usu"> {/*Começo das opções*/}
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/casa-usu.png" alt="opcao-usu"/></Link> 
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/lupa-usu.png" alt="opcao-usu"/></Link>
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/user-usu.png" alt="opcao-usu"/></Link>
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/cesta-usu.png" alt="opcao-usu"/></Link>
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/core-usu.png" alt="opcao-usu"/></Link>
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/caminhao-usu.png" alt="opcao-usu"/></Link>
        </div> {/*Fim das opções*/}
</div> /*Fim da aba lateral*/
)}