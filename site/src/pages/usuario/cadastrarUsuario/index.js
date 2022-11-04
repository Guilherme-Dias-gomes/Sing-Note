import './index.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { alterarLogin, alterarPerfil, buscarUsuarioPorId, cadastarLogin, cadastarPerfil } from "../../../api/usuario/usuarioLoginAPI";
import storage from 'local-storage'

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
        <div className="teste">
            
            <label>Nome:</label>
            <input
                type="text"
                value={nomeUsuario}
                onChange={e => setNomeUsuario(e.target.value)}/>
            
            <label>RG:</label>
            <input
                type="text"
                value={rg}
                onChange={e => setRg(e.target.value)}/>
            
            <label>CPF:</label>
            <input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}/>
            
            <label>Telefone:</label>
            <input
                type="text"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}/>
            
            <label>Nascimento:</label>
            <input
                type="date"
                value={nascimento}
                onChange={e => setNascimento(e.target.value)}/>
            
            <label>Email:</label>
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            
            <label>Senha:</label>
            <input
                type="text"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

            <button onClick={salvarUsuario} >Salvar</button>
        </div>
    )
}