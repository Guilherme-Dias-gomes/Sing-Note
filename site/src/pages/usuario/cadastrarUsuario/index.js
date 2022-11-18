import './index.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { alterarLogin, alterarPerfil, buscarUsuarioPorId, cadastarLogin, cadastarPerfil } from "../../../api/usuario/usuarioLoginAPI";
import storage from 'local-storage'
import { Link } from 'react-router-dom';

export default function CadastroUsuario(){

    const infoStorage = storage('Cliente-Logado')
    const [ idUsuario, setIdUsuario ] = useState()

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('') ;
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState();
    const [email, setEmail] = useState('') ;
    const [senha, setSenha] = useState(''); 

    const { id } = useParams();
    async function salvarUsuario(){
        try{
           if(!id){ 
                const r = await cadastarPerfil(nomeUsuario, rg, cpf, nascimento, telefone);
                await cadastarLogin(email, senha, r.id);

                toast.dark('Você está cadastrado!');
            } else {
                await alterarPerfil(nomeUsuario, rg, cpf, nascimento, telefone, id);
                await alterarLogin(email, senha, id);

                toast.dark('Informações alteradas com sucesso!');
            }

        } catch (err) {
            toast.error(err.response.data.erro);
        }
    } 

    async function carregarUsuario(){

        if(!id)
            return;
    
        const resposta = await buscarUsuarioPorId(id)
        console.log(resposta.info[0].Telefone)
        setIdUsuario(resposta.info[0].IdUsuario)
        setNomeUsuario(resposta.info[0].NomeUsuario)
        setRg(resposta.info[0].Rg)
        setCpf(resposta.info[0].Cpf)
        setNascimento(resposta.info[0].Nascimento.substr(0, 10))
        setTelefone(resposta.info[0].Telefone)
        setEmail(resposta.login[0].Email)
        setSenha(resposta.login[0].Senha)

    }
 
    useEffect(() => {
        carregarUsuario()
    }, [])

    return(
        <div className="pagina-cadastro-usu">
            <Link to={'/login'} className='botao-voltar-cad'>&lArr; Voltar ao menu</Link>
            <h1 className='titulo-cadastro-usuario'>
                <img src='/image/cadastro-prancheta.png' className='imagem-cadastro-usuario' alt='prancheta'/>Cadastrar
            </h1>
            <div className='formulario-cadastro-usu'>
                <div className='formulario-dados-usu'>
                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">Nome:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={nomeUsuario}
                            onChange={e => setNomeUsuario(e.target.value)} />
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">RG:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={rg}
                            onChange={e => setRg(e.target.value)} />
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">CPF:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)} />
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">Telefone:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)} />
                        {/* aaa */}
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">Nascimento:</label>
                        <input
                            className='caixa-de-texto'
                            type="date"
                            value={nascimento}
                            onChange={e => setNascimento(e.target.value)} />
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">Email:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className='caixa-de-texto-div-1'>
                        <label className="titulo-caixa-de-texto">Senha:</label>
                        <input
                            className='caixa-de-texto'
                            type="text"
                            value={senha}
                            onChange={e => setSenha(e.target.value)} />
                    </div>

                    <button className='botao1' onClick={salvarUsuario} >Salvar</button>
                </div>

                {/*----------------------------------------------------------------------------------------------------------------------*/}

                
            </div>
        </div>
    )
}