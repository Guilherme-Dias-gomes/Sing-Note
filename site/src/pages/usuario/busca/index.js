import './index.scss'
import CaixaProdutoUsuario from '../../../components/usuario/caixa-produto-usuario'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'

export default function BuscaUsuario () {
    return(
        <main className='page-consulta-usu'>
            <AbaLateralUSU/>
            <div className='elementos-consulta-usu'>
                <div className='elemento-cabecalho'>
                    <CabecalhoUSU/>
                </div>
                <div className='pesquisa-e-busca'>
                    <input className='input-pesquisa-usu' type="search" placeholder='Buscar por nome' ></input>
                    <button className='botao-buscar-usu'>Buscar</button>
                </div>
                <div className='area-da-consulta-usu'>
                    <div className='categoria-e-tipo'>
                        <h1 className='titulo-categoria'>Categorias</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className='cada-titulo'>Cordas</p>
                            <p className='cada-titulo'>Sopro</p>
                            <p className='cada-titulo'>Percurção</p>
                            <p className='cada-titulo'>Elétricos</p>
                            <p className='cada-titulo'>Teclas</p>
                            <p className='cada-titulo'>Acessórios</p>
                        </div>
                        
                        <h1 className='titulo-tipo'>Tipos</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className='cada-titulo'>Violão</p>
                            <p className='cada-titulo'>Guitarra</p>
                            <p className='cada-titulo'>Piano</p>
                            <p className='cada-titulo'>Teclado</p>
                            <p className='cada-titulo'>Bateria</p>
                            <p className='cada-titulo'>Pandeiro</p>
                            <p className='cada-titulo'>Rebolo</p>
                            <p className='cada-titulo'>Violino</p>
                            <p className='cada-titulo'>Violancelo</p>
                            <p className='cada-titulo'>Saxofone</p>
                            <p className='cada-titulo'>Flauta</p>
                        </div>

                    </div>
                    <div className='parte-da-consulta'>
                        <div className='resultados'> 
                            <p>Resultado de busca:
                            <span className='resultado-valor'> Bateria</span></p>
                            <p>produtos: 
                            <span className='resultado-valor'> 10</span></p></div>

                            <hr/>
                        
                            <div className='cards-produto-usu'>
                            
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                                <CaixaProdutoUsuario/>
                            </div>
                        </div>
                    </div>
            </div>
            
        </main>
    )
}