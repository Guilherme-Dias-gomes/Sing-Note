import './index.scss'

import { listarCategorias } from '../../../api/admin/categoriaAPI'
import { listarTipos } from '../../../api/admin/tipoAPI'

import AbaLateralADM from '../../../components/adm/aba-lateral-adm/index.js'
import Cabecalho from '../../../components/adm/cabecalho-adm/index.js'
import { useEffect, useState } from 'react'
import { SalvarProduto, SalvarImagens, AlterarProduto, buscarProdutoPorId } from '../../../api/admin/produtoAPI.js';
import { API_URL } from '../../../api/config'

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'

export default function CadastrarProduto() {

    const [idProduto, setIdProduto] = useState()

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

    const { id } = useParams();

    async function salvar(){
        try {
            const precoProduto = Number(preco.replace('.',','));

            if(!id) {
                const r = await SalvarProduto(nome, modelo, descricao, estoque, marca, precoProduto, idCategoria, idTipo)
                await SalvarImagens(r.id, imagem1, imagem2)

                toast.dark('Produto cadastrado com sucesso');
            }
            else {
                await AlterarProduto(id, nome, modelo, descricao, estoque, marca, precoProduto, idCategoria, idTipo)
                await SalvarImagens(id, imagem1, imagem2)

                toast.dark('Produto alterado com sucesso');
            }
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }


    function Limpar(){
        setNome('')
        setModelo('')
        setDescricao('')
        setIdCategoria([])
        setIdTipo([])
        setEstoque(0)
        setMarca('')
        setPreco(0)
        setImagem1()
        setImagem2()
    }

    async function carregarProduto(){
        if(!id){ 
            return;
        }
        
        const resposta = await buscarProdutoPorId(id)
        setIdProduto(resposta.info.Id)
        setNome(resposta.info.Nome)
        setModelo(resposta.info.Modelo)
        setDescricao(resposta.info.EspecificacoesTecnicas)
        setEstoque(resposta.info.Estoque)
        setMarca(resposta.info.Marca)
        setPreco(resposta.info.Preco.toString())
        setIdCategoria(resposta.info.IdCategoria)
        setIdTipo(resposta.info.IdTipo)
        
        if(resposta.imagens.length > 0){
            setImagem1(resposta.imagens[0])
        }
        if(resposta.imagens.length > 1){
            setImagem2(resposta.imagens[1])
        }
    }

    async function mostrarCategorias(){
        const resposta = await listarCategorias();
        setCategoria(resposta);
    }    

    async function mostrarTipo(){
        const resposta = await listarTipos();
        setTipo(resposta);
    }    

    function escolherImagem(inputId){
        document.getElementById(inputId).click();
    }

    function exibirImagem(imagem) {
        if (imagem == undefined) {
            return '/image/add-button-maior.png';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }



    useEffect(() => {
        mostrarCategorias()
        mostrarTipo()
        carregarProduto()
    },[])


    return(
        <div className="pagina-principal"> {/*Começo da div mãe*/} 
    
    <AbaLateralADM/>        
        <div className="container-do-cadastro"> {/*Container do cadastro*/}
        <Cabecalho/>
            <div className="parte-cadastro"> {/*Começo da parte do cadastro*/}
                <div className="titulo-cadastrar">
                    <img src="/image/Rectangle 834.png" alt="cadastrar" className="imagem-retangulo"/>
                    <p className='titulo-cadastrar-e-alterar'> {id ? 'Alterar Produto' : 'Cadastrar Produto'} </p>
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
                                <option> </option>

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
                                <label className="titulo-caixa-de-texto-pequena"> No estoque </label>
                                <input type="number" className="caixa-de-texto-pequena"
                                value={estoque} onChange={e => setEstoque(e.target.value)}/>
                            </div>
                            <div className="caixa-de-texto-div-1">
                                <label className="titulo-caixa-de-texto-pequena"> Marca </label>
                                <input type="text" className="caixa-de-texto-pequena"
                                value={marca} onChange={e => setMarca(e.target.value)}/>
                            </div>

                        </div>

                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Preço </label>
                            <input type="number" className="caixa-de-texto"
                            value={preco} onChange={e => setPreco(e.target.value)}/>
                        </div>

                    </div>
                    <div className="formulario-div-2">

                        <div className="caixa-add-imagem">
                            <img src={exibirImagem(imagem1)}
                                 alt='Add'
                                 className='editar-imagem'
                                 onClick={() => escolherImagem('imagem1')}/>

                            <input className='botao-de-add-img' type='file' id='imagem1' onChange={e => setImagem1(e.target.files[0])}/>
                        </div>

                        <div className="caixa-add-imagem-menor">
                            <img src={exibirImagem(imagem2)}
                                 alt='Add' 
                                 className='editar-imagem-menor'
                                 onClick={() => escolherImagem('imagem2')}onChange={e => setImagem2(e.target.files[0])}/>

                            <input className='botao-de-add-img' type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])}/>
                        </div>
                        
                        <div className='container-dos-botoes'>
                            <button className='botao-salvar' onClick={salvar}>Salvar</button>
                            <button className='botao-novo'  onClick={Limpar}>Novo</button>
                        </div>
                    </div>
                </div>
            </div> {/*Fim da parte do cadastro*/}
        </div> {/*Fim do Container do cadastro*/}
    
</div> 
    )
}