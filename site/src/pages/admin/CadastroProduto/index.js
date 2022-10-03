import './index.scss'


import { ToastContainer, toast } from 'react-toastify';
import { listarCategorias } from '../../../api/categoriaAPI'
import { listarTipos } from '../../../api/tipoAPI'

import AbaLateralADM from '../../../components/adm/aba-lateral-adm/index.js'
import Cabecalho from '../../../components/adm/cabecalho-adm/index.js'
import { useEffect, useState } from 'react'
import { SalvarProduto, SalvarImagens } from '../../../api/produtoAPI.js';


export default function CadastrarProduto() {

    const [nome, setNome] = useState('');
    const [modelo, setModelo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState();
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState();

    const [imagem1, setImagem1] = useState();
    const [imagem2, setImagem2] = useState();

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idTipo, setIdTipo] = useState();
    const [tipo, setTipo] = useState([]);

    async function salvar(){
        try {
            const precoProduto = Number(preco.replace('.',','));

            const resposta = await SalvarProduto(nome, modelo, descricao, estoque, marca, precoProduto, idCategoria, idTipo)
            await SalvarImagens(resposta.id, imagem1, imagem2)

        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }


    function Limpar(){
        setNome('')
        setModelo('')
        setDescricao('')
        setIdCategoria(0)
        setIdTipo(0)
        setEstoque()
        setMarca('')
        setPreco()
    }


    async function mostrarCategorias(){
        const resposta = await listarCategorias()
        setCategoria(resposta);
    }    

    async function mostrarTipo(){
        const resposta = await listarTipos()
        setTipo(resposta);
    }    

    function escolherImagem(inputId){
        document.getElementById(inputId).click();
    }

    function exibirImagem(imagem){
        if(imagem == undefined){
            return '/image/add-image.png';
        } else {
            return URL.createObjectURL(imagem);
        }
    }

    useEffect(() => {
        mostrarCategorias()
        mostrarTipo()
    },[])


    return(
        <div className="pagina-principal"> {/*Começo da div mãe*/} 
    
    <AbaLateralADM/>

    
        
        <div className="container-do-cadastro"> {/*Container do cadastro*/}
        <Cabecalho/>
            <div className="parte-cadastro"> {/*Começo da parte do cadastro*/}
                <div className="titulo-cadastrar">
                    <img src="/image/Rectangle 834.png" alt="cadastrar" className="imagem-retangulo"/>
                    <p> Cadastrar Produto </p>
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
                            <select name='categoria' className="caixa-de-texto"
                             value={idCategoria} onChange={e => setIdCategoria(e.target.value)}>
                                <option> </option>
                                {categoria.map(item =>
                                    <option value={item.id}>{item.categoria}</option>    
                                )}
                            </select>
                        </div>
                        
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Tipo </label>
                            <select name='categoria' className="caixa-de-texto"
                                value={idTipo} onChange={e => setIdTipo(e.target.value)}>
                                <option>  </option>

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
                                value={estoque} onChange={e => setEstoque(e.target.value)}/>
                            </div>
                            <div className="caixa-de-texto-div-1">
                                <label className="titulo-caixa-de-texto"> Marca </label>
                                <input type="text" className="caixa-de-texto-pequena"
                                value={marca} onChange={e => setMarca(e.target.value)}/>
                            </div>

                        </div>

                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Preço </label>
                            <input type="text" className="caixa-de-texto-pequena"
                            value={preco} onChange={e => setPreco(e.target.value)}/>
                        </div>

                    </div>
                    <div className="formulario-div-2">

                        <div className="caixa-add-imagem">
                            <img src={exibirImagem(imagem1)}
                                 alt='Add'
                                 className='editar-imagem'
                                 onClick={() => escolherImagem('imagem1')}/>

                            <input type='file' id='imagem1' onChange={e => setImagem1(e.target.files[0])}/>
                        </div>

                        <div className="caixa-add-imagem-menor">
                            <img src={exibirImagem(imagem2)}
                                 alt='Add' 
                                 className='editar-imagem-menor'
                                 onClick={() => escolherImagem('imagem2')}/>

                            <input type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])}/>
                        </div>
                        
                        <div className='container-dos-botoes'>
                            <button className='botao-salvar' onClick={salvar}>Salvar</button>
                            <button className='botao-novo' onClick={Limpar}>Novo</button>
                        </div>
                    </div>
                </div>
            </div> {/*Fim da parte do cadastro*/}
        </div> {/*Fim do Container do cadastro*/}
    
</div> 
    )
}