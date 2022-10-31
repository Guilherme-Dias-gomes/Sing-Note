import './index.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { buscarUsuarioPorId, cadastarLogin, cadastarPerfil } from "../../../api/usuario/usuarioLoginAPI";

export default function CadastroUsuario(){

    const [ idUsuario, setIdUsuario ] = useState( )

    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('') ;
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState();
    const [email, setEmail] = useState('') ;
    const [senha, setSenha] = useState(''); 

    const { id } = useParams()

    async function salvarUsuario(){
        try{
           
                const r = await cadastarPerfil(nome, rg, cpf, nascimento, telefone);
                await cadastarLogin(email, senha, r.id);

                toast.dark('Você está cadastrado!');
            

        } catch (err) {
            toast.error(err.response.data.erro);
        }
    } 

    async function carregarUsuario(){

        if(!id)
            return;
    
        const r = await buscarUsuarioPorId(id);

        setIdUsuario(r.infoUsuario.id);
        setNome(r.infoUsuario.nome);
        setRg(r.infoUsuario.rg);
        setCpf(r.infoUsuario.cpf);
        setNascimento(r.infoUsuario.nascimento);
        setTelefone(r.infoUsuario.telefone);
        setEmail(r.login.email);
        setSenha(r.login.senha);

    }

    useEffect(() => {
        carregarUsuario()
    }, [])

    return(
        <div className="teste">
            
            Nome:<input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}/>
            
            RG:<input
                type="text"
                value={rg}
                onChange={e => setRg(e.target.value)}/>
            
            CPF:<input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}/>
            
            Telefone:<input
                type="text"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}/>
            
            Nascimento:<input
                type="text"
                value={nascimento}
                onChange={e => setNascimento(e.target.value)}/>
            
            email:<input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            
            senha:<input
                type="text"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

            <button onClick={salvarUsuario} >Salvar</button>
        </div>
    )
}