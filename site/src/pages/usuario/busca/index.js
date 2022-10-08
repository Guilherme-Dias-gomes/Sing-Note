import './index.scss'
import CaixaProdutoUsuario from '../../../components/usuario/caixa-produto-usuario'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import { buscarProdutoPorNome, buscarProdutos } from '../../../api/produtoAPI'
import { useEffect, useState } from 'react'
import { buscarProdutoPorCategoria } from '../../../api/categoriaAPI'
import { buscarProdutoPorTipo } from '../../../api/tipoAPI'

export default function BuscaUsuario () {

    const [produtos, setProdutos] = useState([]);
    const [buscar, setBuscar] = useState('')

    async function mostrarProdutos(){
        const resposta = await buscarProdutos();
        setProdutos(resposta);
    }

///////////////////////////////////////////////////////////////////
    async function filtrarTipoGuitarra(){
        const resposta = await buscarProdutoPorTipo(1);
        setProdutos(resposta);
    }
    async function filtrarTipoViolao(){
        const resposta = await buscarProdutoPorTipo(2);
        setProdutos(resposta);
    }
    async function filtrarTipoTeclado(){
        const resposta = await buscarProdutoPorTipo(3);
        setProdutos(resposta);
    }
    async function filtrarTipoPiano(){
        const resposta = await buscarProdutoPorTipo(4);
        setProdutos(resposta);
    }
    async function filtrarTipoBateria(){
        const resposta = await buscarProdutoPorTipo(5);
        setProdutos(resposta);
    }
    async function filtrarTipoPadeiro(){
        const resposta = await buscarProdutoPorTipo(6);
        setProdutos(resposta);
    }
    async function filtrarTipoRebolo(){
        const resposta = await buscarProdutoPorTipo(7);
        setProdutos(resposta);
    }
    async function filtrarTipoViolino(){
        const resposta = await buscarProdutoPorTipo(8);
        setProdutos(resposta);
    }
    async function filtrarTipoViolancelo(){
        const resposta = await buscarProdutoPorTipo(9);
        setProdutos(resposta);
    }
    async function filtrarTipoSaxofone(){
        const resposta = await buscarProdutoPorTipo(10);
        setProdutos(resposta);
    }
    async function filtrarTipoFlauta(){
        const resposta = await buscarProdutoPorTipo(11);
        setProdutos(resposta);
    }
//////////////////////////////////////////////////////////////
    async function filtrarCategoriaCorda(){
        const resposta = await buscarProdutoPorCategoria(1);
        setProdutos(resposta);
    }
    async function filtrarCategoriaSopro(){
        const resposta = await buscarProdutoPorCategoria(2);
        setProdutos(resposta);
    }
    async function filtrarCategoriaPercurcao(){
        const resposta = await buscarProdutoPorCategoria(3);
        setProdutos(resposta);
    }
    async function filtrarCategoriaEletrico(){
        const resposta = await buscarProdutoPorCategoria(4);
        setProdutos(resposta);
    }
    async function filtrarCategoriaTeclas(){
        const resposta = await buscarProdutoPorCategoria(5);
        setProdutos(resposta);
    }
    async function filtrarCategoriaAcessorios(){
        const resposta = await buscarProdutoPorCategoria(6);
        setProdutos(resposta);
    }

    async function filtrar(){
        const resposta = await buscarProdutoPorNome(buscar);
        setProdutos(resposta);
    }

    useEffect(() => {
        mostrarProdutos();
    }, [])

    return(
        <main className='page-consulta-usu'>
            <AbaLateralUSU/>
            <div className='elementos-consulta-usu'>
                <div className='elemento-cabecalho'>
                    <CabecalhoUSU/>
                </div>
                <div className='pesquisa-e-busca'>
                    <input 
                        className='input-pesquisa-usu' 
                        type="text" 
                        placeholder='Buscar por nome'
                        value={buscar}
                        onChange={e => setBuscar(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? filtrar() : ''}/>
                    <button className='botao-buscar-usu' onClick={filtrar}>Buscar</button>
                </div>
                <div className='area-da-consulta-usu'>
                    <div className='categoria-e-tipo'>
                        <h1 className='titulo-categoria'>Categorias</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className='cada-titulo' onClick={filtrarCategoriaCorda}>Cordas</p>
                            <p className='cada-titulo' onClick={filtrarCategoriaSopro}>Sopro</p>
                            <p className='cada-titulo' onClick={filtrarCategoriaPercurcao}>Percurção</p>
                            <p className='cada-titulo' onClick={filtrarCategoriaEletrico}>Elétricos</p>
                            <p className='cada-titulo' onClick={filtrarCategoriaTeclas}>Teclas</p>
                            <p className='cada-titulo' onClick={filtrarCategoriaAcessorios}>Acessórios</p>
                        </div>
                        
                        <h1 className='titulo-tipo'>Tipos</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className='cada-titulo' onClick={filtrarTipoGuitarra}>Guitarra</p>
                            <p className='cada-titulo' onClick={filtrarTipoViolao}>Violão</p>
                            <p className='cada-titulo' onClick={filtrarTipoTeclado}>Teclado</p>
                            <p className='cada-titulo' onClick={filtrarTipoPiano}>Piano</p>
                            <p className='cada-titulo' onClick={filtrarTipoBateria}>Bateria</p>
                            <p className='cada-titulo' onClick={filtrarTipoPadeiro}>Pandeiro</p>
                            <p className='cada-titulo' onClick={filtrarTipoRebolo}>Rebolo</p>
                            <p className='cada-titulo' onClick={filtrarTipoViolino}>Violino</p>
                            <p className='cada-titulo' onClick={filtrarTipoViolancelo}>Violancelo</p>
                            <p className='cada-titulo' onClick={filtrarTipoSaxofone}>Saxofone</p>
                            <p className='cada-titulo' onClick={filtrarTipoFlauta}>Flauta</p>
                        </div>

                    </div>
                    <div className='parte-da-consulta'>
                        <div className='resultados'> 
                            <p>Resultado de busca:
                            <span className='resultado-valor'> {buscar}</span></p>
                            <p>produtos: 
                            <span className='resultado-valor'> </span></p>
                        </div>

                    <hr/>
                        
                        <div className='cards-produto-usu'>
{produtos.map(item => 
    <div className='espaco-produto'>
        <img className='imagem-coracao' src='/image/coracao-card.png' alt='coracao-do-card'/>
        <div className='descricao-card'>
        {item.Imagem}
            <h1 className='card-produto-descricao'>{item.Nome} {item.Marca} {item.Modelo}</h1>
            <h1 className='preco-card'>R$ {item.Preco}</h1>
            <button className='botao-comprar'>
                Comprar
            <img className='imagem-carrinho' src='/image/carrinho-card.png' alt='carrinho-do-card'/>
            </button>
        </div>
    </div>
)}

                        
                    
                        </div>
                        </div>
                    </div>
            </div>
            
        </main>
    )
}