import './index.scss'
import CaixaProdutoUsuario from '../../../components/usuario/caixa-produto-usuario'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import { buscarProdutoPorNome, buscarProdutos } from '../../../api/produtoAPI'
import { useEffect, useState } from 'react'

export default function BuscaUsuario () {

    const [produtos, setProdutos] = useState([]);

    const [buscar, setBuscar] = useState('')

    async function mostrarProdutos(){
        const resposta = await buscarProdutos()
        setProdutos(resposta)
    }

    async function filtrar(){
        const resposta = await buscarProdutoPorNome(buscar)
        setProdutos(resposta)
    }

    useEffect(() => {
        mostrarProdutos()
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
                            <span className='resultado-valor'> {buscar}</span></p>
                            <p>produtos: 
                            <span className='resultado-valor'> 10</span></p></div>

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