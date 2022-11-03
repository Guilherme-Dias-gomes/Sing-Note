import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function AbaLateralUSU() {

    const lerStorage = storage('Cliente-Logado')

    const navegar = useNavigate();

    function sairClick () {
        storage.remove('Cliente-Logado');
        navegar('/login')
    }
    
    useEffect(() => {
        if(!storage('usuario-logado')){
            navegar('/usuario/busca');
        }
        
    }, [])

return(

<div className="aba-lateral-usu"> {/*Começo da aba lateral*/} 
    
        <div className="opcoes-usu"> {/*Começo das opções*/}
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/casa-usu.png" alt="opcao-usu"/></Link> 
            <Link to={"/usuario/busca"}  className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/lupa-usu.png" alt="opcao-usu"/></Link>
            <div onClick={() => navegar('/cadastro/' + lerStorage.id)} className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/user-usu.png" alt="opcao-usu"/></div>
            <Link to={"/carrinho"} className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/cesta-usu.png" alt="opcao-usu"/></Link>
            <Link to={"/favoritos"} className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/core-usu.png" alt="opcao-usu"/></Link>
            <Link className="icone-opcoes-usu"><img className='imagem-aba-usu' src="/image/caminhao-usu.png" alt="opcao-usu"/></Link>
        </div> {/*Fim das opções*/}
        <div className="botao-sair-aba-usu" onClick={sairClick}>
            SAIR <img alt='botaosair' src="/image/Vector.png" className='img-botao-sair-aba-usu'/>
        </div> 
</div> /*Fim da aba lateral*/
)}