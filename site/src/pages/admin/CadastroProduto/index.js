import './index.scss'

import { toast } from 'react-toastify'

import { listarCategorias } from '../../../api/categoriaAPI'
import { listarTipos } from '../../../api/tipoAPI'
import { SalvarProduto } from '../../../api/produtoAPI'

import AbaLateralADM from '../../../components/adm/aba-lateral-adm/index.js'
import Cabecalho from '../../../components/adm/cabecalho-adm/index.js'
import { useEffect, useState } from 'react'


export default function CadastrarProduto() {

    const [nome, setNome] = useState('');
    const [modelo, setModelo] = useState('');

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idTipo, setIdTipo] = useState();
    const [tipo, setTipo] = useState([]);

    const[descricao, setDescricao] = useState('');
    const[estoque, setEstoque] = useState(0);
    const[marca, setMarca] = useState('');
    const[preco, setPreco] = useState(0);

    async function salvar(){
        try{
            const valorProduto = Number(preco.replace('.',','));

            const resposta = await SalvarProduto(nome, modelo, descricao, estoque, marca, preco);
            toast.dark('Produto cadastrado');
        } catch (err){
            toast.error(err.resposte.data.erro)
        }  
    }

    async function mostrarCategorias(){
        const resposta = await listarCategorias()
        setCategoria(resposta);
    }    

    async function mostrarTipo(){
        const resposta = await listarTipos()
        setTipo(resposta);
    }    

    useEffect(() => {
        mostrarCategorias()
        mostrarTipo()
    },[])


    return(
        <div className="pagina-principal"> {/*Começo da div mãe*/} 
    
    <AbaLateralADM/>

    <div> {/*Começo da página*/} 
        <Cabecalho/>
        <div className="container-do-cadastro"> {/*Container do cadastro*/}
            <div className="parte-cadastro"> {/*Começo da parte do cadastro*/}
                <div className="titulo-cadastrar"><img src="/image/Rectangle 834.png" alt="cadastrar" className="imagem-retangulo"/><p> Cadastrar Produto </p>
                </div>

                <div className="container-formulario"> {/*Container Formulário*/}
                    <div className="formulario-div-1">

                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Produto </label>
                            <input type="text" className="caixa-de-texto"
                            value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Modelo </label>
                            <input type="text" className="caixa-de-texto"
                            value={modelo} onChange={e => setModelo(e.target.value)}/>
                        </div>
                        
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Categorias </label>
                            <select name='categoria' className="caixa-de-texto">
                                <option value=''> </option>
                                <option value='Cordas'> Thawan </option>
                                <option value='Sopro'> Thawan </option>
                                <option value='Percurssao'> Thawan </option>
                                <option value='Eletricos'> Thawan </option>
                                <option value='Teclas'> Thawan </option>
                                <option value='Acessorios'> Thawan </option>
                            </select>
                        </div>
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Tipo </label>
                            <select name='categoria' className="caixa-de-texto"
                                value={idTipo} onChange={e => setIdTipo(e.target.value)}>
                                <option select disabled hidden>  </option>

                                    {tipo.map(item => 
                                        <option value={item.id}> {item.tipo} </option>
                                    )}
                            </select>
                        </div>
                        
                        <div className="caixa-de-texto-grande-div-1">
                            <label className="titulo-caixa-de-texto-grande"> Especificações Técnicas </label>
                            <textarea className="caixa-de-texto-grande"
                            value={descricao} onChange={e => setDescricao(e.target.value)}/>
                            </div>
                        
                        <div className='container-divs-menores'>

                            <div className="caixa-de-texto-div-1">
                                <label className="titulo-caixa-de-texto"> No estoque </label>
                                <input type="text" className="caixa-de-texto-pequena"
                                value={descricao} onChange={e => setDescricao(e.target.value)}/>
                            </div>
                            <div className="caixa-de-texto-div-1">
                                <label className="titulo-caixa-de-texto"> Marca </label>
                                <input type="text" className="caixa-de-texto-pequena"/>
                            </div>

                        </div>

                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> Preço </label><input type="text" className="caixa-de-texto-pequena"/></div>

                    </div>
                    <div className="formulario-div-2">
                        <div className="caixa-add-imagem"><img src='/image/add-image.png' alt='Add' className='editar-imagem'/></div>
                        <div className="caixa-add-imagem-menor"><img src='/image/add-image.png' alt='Add' className='editar-imagem-menor'/></div>
                        <div className='container-dos-botoes'>
                            <button className='botao-salvar' onClick={salvar}>Salvar</button>
                            <button className='botao-novo'>Novo</button>
                        </div>

                    </div>
                </div>
            </div> {/*Fim da parte do cadastro*/}
        </div> {/*Fim do Container do cadastro*/}
    </div> {/*Fim da página*/}
</div> 
    )
}