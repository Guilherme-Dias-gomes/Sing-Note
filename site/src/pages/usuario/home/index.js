import './index.scss'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import { Link } from 'react-router-dom';

import { buscarProdutos } from '../../../api/admin/produtoAPI'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../api/config'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function HomeUsuario() {

    const lerStorage = storage('Cliente-Logado')
    const navegar = useNavigate()

    const [produto, setProduto] = useState([]);


    // const navegar = useNavigate();

    async function mostrarProdutos() {
        const resposta = await buscarProdutos();
        setProduto(resposta);
    }

    // // ///////////////////////////////////////////////////////////////////
    // async function filtrarTipoGuitarra() {
    //     const resposta = await buscarProdutoPorTipo(1);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoViolao() {
    //     const resposta = await buscarProdutoPorTipo(2);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoTeclado() {
    //     const resposta = await buscarProdutoPorTipo(3);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoPiano() {
    //     const resposta = await buscarProdutoPorTipo(4);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoBateria() {
    //     const resposta = await buscarProdutoPorTipo(5);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoPadeiro() {
    //     const resposta = await buscarProdutoPorTipo(6);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoRebolo() {
    //     const resposta = await buscarProdutoPorTipo(7);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoViolino() {
    //     const resposta = await buscarProdutoPorTipo(8);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoViolancelo() {
    //     const resposta = await buscarProdutoPorTipo(9);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoSaxofone() {
    //     const resposta = await buscarProdutoPorTipo(10);
    //     setProdutos(resposta);
    // }
    // async function filtrarTipoFlauta() {
    //     const resposta = await buscarProdutoPorTipo(11);
    //     setProdutos(resposta);
    // }
    // ////////////////////////////////////////////////////////////////
    // async function filtrarCordaCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(1);
    //     setProdutos(resposta);
    // }
    // async function filtrarSoproCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(2);
    //     setProdutos(resposta);
    // }
    // async function filtrarPercurcaoCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(3);
    //     setProdutos(resposta);
    // }
    // async function filtrarEletricoCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(4);
    //     setProdutos(resposta);
    // }
    // async function filtrarTeclasCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(5);
    //     setProdutos(resposta);
    // }
    // async function filtrarAcessoriosCategoria() {
    //     const resposta = await buscarProdutoPorCategoria(6);
    //     setProdutos(resposta);
    // }

    // async function filtrar() {
    //     const resposta = await buscarProdutoPorNome(buscar);
    //     setProdutos(resposta);
    // }

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



    useEffect(() => {
        mostrarProdutos();
    }, [])

    function openNav() {
        document.getElementById("mySidenav").style.width = "35%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className='pagina-principal-lp'>

            <span className='tres-tracos-menu-lp' onClick={openNav}>&#9776;</span>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                <div className='nome-e-icone-menu-lp'>
                    <img src='/image/fulanodomenu.png' className='icone-do-mano' />
                    <p className='ola-menu'>Ol??, seja bem-vindo</p>
                </div>
                <div className='area-icones-lp'>
                    <div className='itens-menu-lp' onClick={() => navegar('/cadastro/' + lerStorage.id)}>
                        <img src='/image/human-lp.png' className='img-itens-menu-lp' alt='humano' />
                        <p className='nome-menu-lp'>Minha conta</p>
                    </div>

                    <Link className='itens-menu-lp' to={"/usuario/busca"}>
                        <img src='/image/lupa-lp.png' className='img-itens-menu-lp' alt='lupa' />
                        <p className='nome-menu-lp'>Pesquisa</p>
                    </Link>

                    <Link className='itens-menu-lp' to={"/carrinho"}>
                        <img src='/image/cart-lp.png' className='img-itens-menu-lp' alt='carrinho' />
                        <p className='nome-menu-lp'>Carrinho</p>
                    </Link>

                    {/* <Link className='itens-menu-lp' to={'/login'}>
                        <img src='/image/heart-lp.png' className='img-itens-menu-lp' alt='coracao' />
                        <p className='nome-menu-lp'>Favoritos</p>
                    </Link> */}

                    <Link className='itens-menu-lp' to={'/acompanhar/pedido'}>
                        <img src='/image/truck-lp.png' className='img-itens-menu-lp' alt='entrega' />
                        <p className='nome-menu-lp'>Meus pedidos</p>
                    </Link>
                    <Link className='itens-menu-lp' to={'/'}>
                        <img src='/image/administracao.png' className='img-itens-menu-lp-adm' alt='adm' />
                        <p className='nome-menu-lp'>Administra????o</p>
                    </Link>
                </div>
            </div>


            <div className='parte-superior-musicalize'>
                <div className='div-maleaveis'>
                    <img src='/image/forma-azul-canto.png' className='maleavel-sup-esq' alt='maleavel' />
                    <img src='/image/forma-azul-baixo.png' className='maleavel-inf-dir' alt='maleavel' />
                </div>
                <div className='musicalize-titulo-e-img'>
                    <div className='input-e-lupa'>
                        {/* <input className='aba-busca-lp' placeholder='Buscar'/>
                        <img src='/image/lupa-usu-busca.png' className='img-lupa-lp'/> */}
                    </div>
                    <div className='musicaliza-propaganda'>
                        <div className='musicaliza-propaganda-textos'>
                            <h1 className='titulo-musicaliza-lp'>Musicalize aqui!</h1>
                            <p className='textinho-inspiracional'>
                                Fa??a seu sonho se tornar realidade,
                                adquira j?? seu instrumento aqui na sing note,
                                e toque notas que voc?? jamais foi capaz de
                                alcan??ar!
                            </p>
                            <Link to={'/cadastro'}>
                                <button className='botao-cadastre-se-lp'>Cadastre-se</button>
                            </Link>
                            
                        </div>
                        <img src='/image/violao-preto.png' alt='violao-preto' className='violao-preto-lp' />
                    </div>
                </div>
            </div>
            {/*---------------------------------------------------------------------------------------------------------------------------------------*/}
            <div className='aba-grande-de-conteudos'>
                <div className='preenchimento-azul'></div>
                <div className='preenchimento-azul1'></div>
                <div className='preenchimento-azul2'></div>
                <div className='preenchimento-azul3'></div>
                <div className='conteudo-de-itens'>
                    <div className='preenchimento-verde'></div>
                    <h1 className='titulo-lista-de-itens'>PRODUTOS</h1>
                    <div className='lista-de-itens-lp'>
                        {/*--------------------Card dos itens--------------------*/}
                        {produto.map(item => 
                            
                            <div className='espaco-produto-landp'>
                                <div className='quadrado-lp'>
                    
                                    <div className='quadrado-azul-card-lp'>
                                        <p className='letras-restam-lp'>Restam </p>
                                        <spamn className='unidades-letras-restam-lp'>{item.Estoque}</spamn>
                                        <p className='letras-restam-lp'>Unid.</p>
                                    </div>
                                </div>
                                
                                <div className='descricao-card-lp'>
                                    <img className='imagem-produto-card-lp' src={exibirImagem(item.Imagem)} alt='produto-do-card' />{/*<------ src={exibir(props.item.Imagem)}*/}
                                    <div className='preco-descricao-lp'>
                                        <div className='card-produto-descricao-lp'>
                                            <span>{item.Nome.substr(0,15)}</span>
                                            <span>{item.Marca}</span>
                                            <span>{item.Modelo.substr(0,15)}</span>
                                        </div>
                                        <h1 className='preco-card-lp'>{item.Preco}</h1>
                                    </div>
                                </div>
                                <Link to={'/login'}>
                                    <button className='botao-comprar-lp'>Comprar
                                        <img className='imagem-carrinho-lp' src='/image/carrinho-card.png' alt='carrinho-do-card' />
                                    </button>
                                </Link>
                            </div>
                        
                        )}

                        {/*--------------------Card dos itens--------------------*/}

                    </div>

                </div>

                {/*---------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className='conteudo-de-mercham'>
                    <h1 className='expertise-lp'>EXPERTISE</h1>
                    <div className='oferecimentos-lp'>

                        <div className='oferc'>
                            <img src='/image/smile.png' className='img-oferecimento' />
                            <p className='texto-oferc'>Melhorar a experi??ncia do cliente</p>
                        </div>

                        <div className='oferc'>
                            <img src='/image/certo.png' className='img-oferecimento' />
                            <p className='texto-oferc'>Monitora a conformidade da entrega</p>
                        </div>

                        <div className='oferc'>
                            <img src='/image/money.png' className='img-oferecimento' />
                            <p className='texto-oferc'>Menor e melhor custo benef??cio </p>
                        </div>

                    </div>

                </div>

                {/*---------------------------------------------------------------------------------------------------------------------------------------*/}

                <div className='categorias-lp'>
                    <p className='titulo-categorias-lp'>Categorias</p>

                    <div className='area-seletores-lp'>

                        <Link to={'/login'} className='link-cat-lp'>
                        <div className='quadradin-categoria-lp'>
                            <img src='/image/violao-cat.png' className='img-cat-seletor-lp' />
                            <p className='titulinho-cat-seletor'>Cordas</p>
                        </div>
                        </Link>
                        
                        <Link to={'/login'} className='link-cat-lp'>
                        <div className='quadradin-categoria-lp'>
                            <img src='/image/trompete-cat.png' className='img-cat-seletor-lp' />
                            <p className='titulinho-cat-seletor'>Sopros</p>
                        </div>
                        </Link>

                        <Link to={'/login'} className='link-cat-lp'>
                        <div className='quadradin-categoria-lp'>
                            <img src='/image/pandeiro-cat.png' className='img-cat-seletor-lp' />
                            <p className='titulinho-cat-seletor'>Percurss??o</p>
                        </div>
                        </Link>

                        <Link to={'/login'} className='link-cat-lp'>
                        <div className='quadradin-categoria-lp'>
                            <img src='/image/piano-cat.png' className='img-cat-seletor-lp' />
                            <p className='titulinho-cat-seletor'>Teclas</p>
                        </div>
                        </Link>

                        <Link to={'/login'} className='link-cat-lp'>
                        <div className='quadradin-categoria-lp'>
                            <img src='/image/paleta-cat.png' className='img-cat-seletor-lp' />
                            <p className='titulinho-cat-seletor'>Acess??rios</p>
                        </div>
                        </Link>


                    </div>

                </div>
            </div><RodapeUsuario/>
        </div>
    )
}