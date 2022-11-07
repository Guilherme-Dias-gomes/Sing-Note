import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
// import { buscarProdutoPorNome, buscarProdutos } from '../../../api/admin/produtoAPI'
// import { useEffect, useState } from 'react'
// import { buscarProdutoPorCategoria } from '../../../api/admin/categoriaAPI'
// import { buscarProdutoPorTipo } from '../../../api/admin/tipoAPI'
// import { ContarProdutos } from '../../../api/usuario/usuarioLoginAPI'
// import { API_URL } from '../../../api/config'
// import { useNavigate } from 'react-router-dom'

export default function HomeUsuario() {

    // const [produtos, setProdutos] = useState([]);
    // const [buscar, setBuscar] = useState('');
    // const [quantidade, setQuantidade] = useState([]);

    // const navegar = useNavigate();

    // async function mostrarProdutos() {
    //     const resposta = await buscarProdutos();
    //     setProdutos(resposta);
    // }

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

    // function exibirImagem(imagem) {
    //     if (!imagem) {
    //         return '/image/imagespadrao.png';
    //     }
    //     else if (typeof (imagem) == 'string') {
    //         return `${API_URL}/${imagem}`
    //     }
    //     else {
    //         return URL.createObjectURL(imagem);
    //     }
    // }

    // async function mostrarQuantidade() {
    //     const respota = await ContarProdutos()
    //     setQuantidade(respota)
    // }

    // function abrirDetalhes(id) {
    //     navegar('/produto/' + id + '/detalhes')
    // }

    // useEffect(() => {
    //     mostrarQuantidade()
    // }, [])

    // useEffect(() => {
    //     mostrarProdutos();
    // }, [])

    return (
        <div className='pagina-principal-lp'>
            <div className='parte-superior-musicalize'>
            <div className='div-maleaveis'>  
                <img src='/image/forma-azul-canto.png' className='maleavel-sup-esq' alt='maleavel'/>
                <img src='/image/forma-azul-baixo.png' className='maleavel-inf-dir' alt='maleavel'/>
            </div>
            <div className='musicalize-titulo-e-img'>
                <input className='aba-busca-lp'/>
                <div className='musicaliza-propaganda'>
                    <h1>Musicalize aqui</h1>
                    <p className='textinho-inspiracional'>
                    Faça seu sonho se tornar realidade, 
                    adquira já seu instrumento aqui na sing note, 
                    e toque notas que você jamais foi capaz de 
                    alcançar! 
                    </p>
                    <button className='botao-cadastre-se-lp'>Cadastre-se</button>
                </div>
            </div>      
            </div>
        </div>
    )
}