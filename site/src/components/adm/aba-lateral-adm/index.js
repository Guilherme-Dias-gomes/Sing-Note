import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AbaLateralADM() {

    const navegar = useNavigate();

    function sairClick () {
        storage.remove('usuario-logado');
        navegar('/admin/login')
    }

    useEffect(() => {
        if(!storage('usuario-logado')){
            navegar('/admin/login');
        }

    }, [])
return(

<div className="aba-lateral"> {/*Começo da aba lateral*/}

    <div className="opcoes"> {/*Começo das opções*/}
        <Link to={'/'} className="icone-opcoes-adm-home">
            <img className='img-icone' src="/image/silhueta-negra-de-casa-sem-porta 2.png" alt="opcao"/>
            <p className="nome-icones">Home</p>
        </Link>

        <Link to={'/admin/consulta'} className="icone-opcoes-adm-consulta">
            <img className='img-icone' src="/image/lupa 2.png" alt="opcao"/>
            <p className="nome-icones">Consulta</p>
        </Link>

        <Link to={'/admin/produto'} className="icone-opcoes-adm-cadastro">
            <img className='img-icone' src="/image/add-button.png" alt="opcao"/>
            <p className="nome-icones">Cadastro</p>
        </Link>

        <Link to={'/admin/pedidos'} className="icone-opcoes-adm-pedidos">
            <img className='img-icone' src="/image/carrinho-carrinho 2.png" alt="opcao"/>
            <p className="nome-icones">Pedidos</p>
        </Link>
        <Link to={'/lp'} className="icone-opcoes-adm-lp">
            <img className='img-icone-doc' src="/image/documento.png" alt="LandPage"/> 
            <p className="nome-icones">Tela Principal</p>
        </Link>
    </div> {/*Fim das opções*/}

    <div onClick={sairClick} className="icone-opcoes">
        <img className='img-icone' src="/image/Vector.png" alt="opcao"/>
        <p className="nome-icones">Sair</p>
    </div>

</div> /*Fim da aba lateral*/
)}




