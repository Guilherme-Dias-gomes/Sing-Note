import './produto.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm/index.js'
import Cabecalho from '../../../components/adm/cabecalho-adm/index.js'

export default function CadastrarProduto() {
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
                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> Produto </label><input type="text" className="caixa-de-texto"/></div>
                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> Modelo </label><input type="text" className="caixa-de-texto"/></div>
                        
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Categorias </label>
                            <select name='categoria' className="caixa-de-texto">
                                <option value=''> </option>
                                <option value='Guitarra'> Guitarra </option>
                                <option value='Bateria'> Bateria </option>
                            </select>
                        </div>
                        <div className="caixa-de-texto-div-1">
                            <label className="titulo-caixa-de-texto"> Tipo </label>
                            <select name='categoria' className="caixa-de-texto">
                                <option value=''> </option>
                                <option value='Guitarra'> Guitarra </option>
                                <option value='Bateria'> Bateria </option>
                            </select>
                        </div>
                        
                        <div className="caixa-de-texto-grande-div-1"><label className="titulo-caixa-de-texto-grande"> Especificações Técnicas </label><textarea className="caixa-de-texto-grande"/></div>
                        
                        <div className='container-divs-menores'>
                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> No estoque </label><input type="text" className="caixa-de-texto-pequena"/></div>
                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> Marca </label><input type="text" className="caixa-de-texto-pequena"/></div>
                        </div>

                        <div className="caixa-de-texto-div-1"><label className="titulo-caixa-de-texto"> No estoque </label><input type="text" className="caixa-de-texto-pequena"/></div>

                    </div>
                    <div className="formulario-div-2">
                        <div className="caixa-add-imagem"><img src='/image/add-image.png' alt='Add' className='editar-imagem'/></div>
                        <div className="caixa-add-imagem-menor"><img src='/image/add-image.png' alt='Add' className='editar-imagem-menor'/></div>
                        <div className='container-dos-botoes'>
                            <button className='botao-salvar'>Salvar</button>
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