import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import { buscarProdutoPorNome, buscarProdutos } from '../../../api/admin/produtoAPI'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { buscarProdutoPorCategoria } from '../../../api/admin/categoriaAPI'
import { buscarProdutoPorTipo } from '../../../api/admin/tipoAPI'
import { ContarProdutos } from '../../../api/usuario/usuarioLoginAPI'
import { addFavoritos } from '../../../api/usuario/favoritosAPI'
import { API_URL } from '../../../api/config'
import { useNavigate, useParams } from 'react-router-dom'
import storage from 'local-storage';

export default function BuscaUsuario () {

    const [produtos, setProdutos] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [quantidade, setQuantidade] = useState([]);

    const [ idProduto, setIdProduto ] = useState();

    const navegar = useNavigate();

    const id = useParams()

    const lerStorage = storage('Cliente-Logado');

    async function mostrarProdutos(){
        const resposta = await buscarProdutos();
        setProdutos(resposta);
    }


// ///////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////
    async function filtrarCordaCategoria(){
        const resposta = await buscarProdutoPorCategoria(1);
        setProdutos(resposta);
    }
    async function filtrarSoproCategoria(){
        const resposta = await buscarProdutoPorCategoria(2);
        setProdutos(resposta);
    }
    async function filtrarPercurcaoCategoria(){
        const resposta = await buscarProdutoPorCategoria(3);
        setProdutos(resposta);
    }
    async function filtrarEletricoCategoria(){
        const resposta = await buscarProdutoPorCategoria(4);
        setProdutos(resposta);
    }
    async function filtrarTeclasCategoria(){
        const resposta = await buscarProdutoPorCategoria(5);
        setProdutos(resposta);
    }
    async function filtrarAcessoriosCategoria(){
        const resposta = await buscarProdutoPorCategoria(6);
        setProdutos(resposta);
    }

    async function filtrar(){
        const resposta = await buscarProdutoPorNome(buscar);
        setProdutos(resposta);
    }

    function exibirImagem(imagem) {
        if (!imagem) {
            return '/image/imagespadrao.png';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }

    // async function salvarUsuario(){
    //     try{
    //        if(!id){ 
    //             const r = await cadastarPerfil(nomeUsuario, rg, cpf, nascimento, telefone);
    //             await cadastarLogin(email, senha, r.id);

    //             toast.dark('Você está cadastrado!');
    //         } else {
    //             await alterarPerfil(nomeUsuario, rg, cpf, nascimento, telefone, id);
    //             await alterarLogin(email, senha, id);

    //             toast.dark('Informações alteradas com sucesso!');
    //         }

    //     } catch (err) {
    //         toast.error(err.response.data.erro);
    //     }
    // } 

    async function salvarFavoritos(){
        try {

            if(!id){
                const r = await addFavoritos(idProduto ,lerStorage.id)
            }
            
        } catch (err) {
            toast.error(err.response.data.erro)
        } 
    }


    async function mostrarQuantidade(){
        const respota = await ContarProdutos()
        setQuantidade(respota)
    }

    function abrirDetalhes(id){
        navegar('/produto/' + id + '/detalhes' )
    }

    useEffect(() => {
        mostrarQuantidade()
    }, [])

    useEffect(() => {
        mostrarProdutos();
    }, [])

    //////////////////////////////////////////////////////////////
    //Comandos do tipo e categoria, alternânia de cores

    const [botaocatipo, setBotaocatipo] = useState(0)

    function BotaoCatipo0(){setBotaocatipo(0)}
    function BotaoCatipo1(){setBotaocatipo(1)}
    function BotaoCatipo2(){setBotaocatipo(2)}
    function BotaoCatipo3(){setBotaocatipo(3)}
    function BotaoCatipo4(){setBotaocatipo(4)}
    function BotaoCatipo5(){setBotaocatipo(5)}
    function BotaoCatipo6(){setBotaocatipo(6)}

    function BotaoCatipo7(){setBotaocatipo(7)}
    function BotaoCatipo8(){setBotaocatipo(8)}
    function BotaoCatipo9(){setBotaocatipo(9)}
    function BotaoCatipo10(){setBotaocatipo(10)}
    function BotaoCatipo11(){setBotaocatipo(11)}
    function BotaoCatipo12(){setBotaocatipo(12)}
    function BotaoCatipo13(){setBotaocatipo(13)}
    function BotaoCatipo14(){setBotaocatipo(14)}
    function BotaoCatipo15(){setBotaocatipo(15)}
    function BotaoCatipo16(){setBotaocatipo(16)}
    function BotaoCatipo17(){setBotaocatipo(17)}

    return(
        <main className='page-consulta-usu'>
            <div className='bola1'></div>
            <div className='bola2'></div>
            <div className='bola3'></div>
            <AbaLateralUSU/>
            <div className='elementos-consulta-usu'>
                <div className='elemento-cabecalho'>
                    <CabecalhoUSU/>
                </div>
                <div className='pesquisa-e-busca'>
                    <div className='busca-e-lupa'>
                        <input 
                            className='input-pesquisa-usu' type="search" placeholder='Buscar por nome'
                            value={buscar}onChange={e => setBuscar(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' ? filtrar() && BotaoCatipo0(): ''}/>
                        <button className='botao-input-buscar'> 
                            <img src='/image/lupa-usu-busca.png' alt='lupa-botao' className='lupa-busca-usu'/>
                        </button>
                    </div>
                    <button className='botao-buscar-usu' onClick={()=>{filtrar(); BotaoCatipo0()}}>Buscar</button>
                   
                </div>
                <div className='area-da-consulta-usu'>
                    <div className='categoria-e-tipo'>
                        <h1 className='titulo-categoria'>Categorias</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className={botaocatipo===1? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarCordaCategoria(); BotaoCatipo1()}}>Cordas</p>
                            <p className={botaocatipo===2? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarSoproCategoria(); BotaoCatipo2()}}>Sopro</p>
                            <p className={botaocatipo===3? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarPercurcaoCategoria(); BotaoCatipo3()}}>Percurssão</p>
                            <p className={botaocatipo===4? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarEletricoCategoria(); BotaoCatipo4()}}>Elétricos</p>
                            <p className={botaocatipo===5? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTeclasCategoria(); BotaoCatipo5()}}>Teclas</p>
                            <p className={botaocatipo===6? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarAcessoriosCategoria(); BotaoCatipo6()}}>Acessórios</p>
                        </div>
                        
                        <h1 className='titulo-tipo'>Tipos</h1>
                        <div className='opcao-tipo-categoria'>
                            <p className={botaocatipo===7? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoGuitarra(); BotaoCatipo7()}}>Guitarra</p>
                            <p className={botaocatipo===8? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoViolao(); BotaoCatipo8()}}>Violão</p>
                            <p className={botaocatipo===9? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoTeclado(); BotaoCatipo9()}}>Teclado</p>
                            <p className={botaocatipo===10? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoPiano(); BotaoCatipo10()}}>Piano</p>
                            <p className={botaocatipo===11? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoBateria(); BotaoCatipo11()}}>Bateria</p>
                            <p className={botaocatipo===12? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoPadeiro(); BotaoCatipo12()}}>Pandeiro</p>
                            <p className={botaocatipo===13? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoRebolo(); BotaoCatipo13()}}>Rebolo</p>
                            <p className={botaocatipo===14? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoViolino(); BotaoCatipo14()}}>Violino</p>
                            <p className={botaocatipo===15? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoViolancelo(); BotaoCatipo15()}}>Violancelo</p>
                            <p className={botaocatipo===16? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoSaxofone(); BotaoCatipo16()}}>Saxofone</p>
                            <p className={botaocatipo===17? "cada-titulo-click" : "cada-titulo"} onClick={()=>{filtrarTipoFlauta(); BotaoCatipo17()}}>Flauta</p>
                        </div> 

                    </div>
                    <div className='parte-da-consulta'>
                        <div className='resultados'> 
                            <p>
                                Resultado de busca:
                                <span className='resultado-valor'> {buscar}</span>
                            </p>

                            {quantidade.map( item =>
                                <p>
                                    produtos: 
                                    <span className='resultado-valor'> {item.Quantidade}</span>
                                </p>    
                            )}
                        </div>

                    <hr/>
                        
                        <div className='cards-produto-usu'>
                            {produtos.map(item => 
                                <div className='espaco-produto-busca-usu' >
                                    {/* {item.Id} */}
                                    <div className='coracao-e-unidades'>
                                        <img onClick={salvarFavoritos()} className='imagem-coracao' src='/image/coracao-card.png' alt='coracao-do-card'/>
                                        <div className='quadrado-unidades'>
                                            <p className='quadrado-texto'>Restam</p>
                                            <p className='quadrado-qtd-unidade'> {item.Estoque}</p>
                                            <p className='quadrado-texto'>Unid.</p>
                                        </div>
                                    </div>
                                    <div className='formatacao-img-produto'>
                                        <img src={exibirImagem(item.Imagem)} className="ImagemProdutoUsu" alt='teste'/>
                                    </div>

                                    <div className='descricao-card'>
                                    
                                        <div className='card-produto-descricao'>
                                            <p className='descricao-produto-card-usu'>{item.Nome}</p>
                                            <p className='descricao-produto-card-usu'>{item.Marca}</p>
                                            <p className='descricao-produto-card-usu'>{item.Modelo}</p>
                                        </div>
                                        <h1 className='preco-card'>R$ {item.Preco}</h1>
                                        <button className='botao-comprar' onClick={() => abrirDetalhes(item.Id)}>
                                            Comprar
                                        <img className='imagem-carrinho' src='/image/carrinho-card.png' alt='carrinho-do-card'/>
                                        </button>
                                    </div>

                                </div>
                            )}

                        
                    
                        </div>
                        </div>
                    </div>
                    <RodapeUsuario/>
            </div>
            
        </main>
    )
}