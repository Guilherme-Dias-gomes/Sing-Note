//import { deletarProduto } from '../../../api/produtoAPI'
import './index.scss'


function ElementoProduto (props) {

    return(
        <main className='page-produto'>
            <div className='id-imagens'>
                <p>#{props.id}</p>
                <div>
                    <button><img src='/image/lapis.png' alt='lapis'></img></button>
                     <button><img src='/image/lixo.png' alt='Lixeira'/></button>
                </div>
            </div>

            <div className='espaco-produto'>
                 <img src={props.imagem} className={props.ImagemProduto} alt='img-produto'/>

                <h3 className='Info-Produto'><span>{props.produto} </span>
                                             <span>{props.marca} </span>
                                             <span>{props.modelo}</span>
                </h3>

                <h2 className='Preco-Produto'>R$ <span>{props.preco}</span></h2>          
            </div>
        </main>
    )
}

export default ElementoProduto;