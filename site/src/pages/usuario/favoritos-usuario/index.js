import ItemFavorito from '../../../components/usuario/item-favorito'
import './index.scss'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'

export default function FavoritosUsuario() {
    
    // const [itens, setItens] = useState([]);

    // async function carregarCarrinho() {
    //     let carrinho = Storage('carrinho');
    //     if (carrinho) {

    //         let temp = [];

    //         for (let produto of carrinho) {
    //             let p = await buscarProdutoPorId(produto.id);

    //             temp.push({
    //                 produto: p,
    //                 qtd: produto.qtd
    //             })
    //         }
    //         console.log(temp)
    //         setItens(temp)
    //     }
    // }

    // useEffect(() => {
    //     carregarCarrinho();
    // }, [])



    return (
        <div className='page-favorito-usu'>
            <div className='bola1favorito'></div>
            <div className='bola2favorito'></div>
            <div className='bola3favorito'></div>
            <AbaLateralUSU />
            <div className='elementos-favorito-usu'>
                <div className='elemento-cabecalho-favorito'>
                    <CabecalhoUSU />
                    <div className='titulo-e-barra-de-itens-favoritos'>
                        <p className='titulo-e-coracao'><img src='/image/caminhao-usu.png'/> pedidos</p>
                        <div className='card-itens-do-favorito'>
                            <div className='itens-do-favorito'>
                                <ItemFavorito  />
                                <ItemFavorito  />
                                <ItemFavorito  />
                                {/*item={item}*/}
                                {/* {itens.map(item =>
                                    
                                )}  --- Realizar mapeamento*/}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}