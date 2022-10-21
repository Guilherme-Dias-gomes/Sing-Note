import { useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { cadastarLogin, cadastarPerfil } from "../../../api/usuario/usuarioLoginAPI";

export default function CadastroUsuario(){

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
            if (!id){
                const r = await cadastarPerfil(nome, rg, cpf, telefone, nascimento);
                await cadastarLogin(email, senha, r.id);

                toast.dark('Você está cadastrado');
            }

        } catch (err) {
            toast.error(err.response.data.erro);
        }
    } 

    // async function salvar(){
    //     try {
    //         const precoProduto = Number(preco.replace('.',','));

    //         if(!id) {
    //             const r = await SalvarProduto(nome, modelo, descricao, estoque, marca, precoProduto, idCategoria, idTipo)
    //             await SalvarImagens(r.id, imagem1, imagem2)

    //             toast.dark('Produto cadastrado com sucesso');
    //         }
    //         else {
    //             await AlterarProduto(id, nome, modelo, descricao, estoque, marca, precoProduto, idCategoria, idTipo)
    //             await SalvarImagens(id, imagem1, imagem2)

    //             toast.dark('Produto alterado com sucesso');
    //         }
    //     } catch (err) {
    //         toast.error(err.response.data.erro);
    //     }
    // }

    return(
        <div>
            <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}/>
            <input
                type="text"
                value={rg}
                onChange={e => setRg(e.target.value)}/>
            <input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}/>
            <input
                type="text"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}/>
            <input
                type="text"
                value={nascimento}
                onChange={e => setNascimento(e.target.value)}/>
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            <input
                type="text"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

            <button onClick={salvarUsuario} >Salvar</button>
        </div>
    )
}