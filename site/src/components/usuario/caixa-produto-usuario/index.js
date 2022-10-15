import { API_URL } from '../../../api/config';
//import { useNavigate } from 'react-router-dom'
import './index.scss'


export default function CaixaProdutoUsuario (props) {

    //const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return `/image/imagespadrao.png`;
        else 
            return `${API_URL}/${imagem}`
    }

    function formatarPreco(preco) {
        return preco.toFixed(2).replace('.', ',');
    }

    return(
        <main className='caixinha-produto-usuario'>
            <div className='espaco-produto'>
                <img className='imagem-coracao' src={exibir(props.item.Imagem)} alt='coracao-do-card'/>
                <div className='descricao-card'>
                    <img className='imagem-produto-card' src='/image/bateria.png' alt='produto-do-card'/>
                    <h1 className='card-produto-descricao'>                               
                        <span>{props.item.Nome}</span>
                        <span>{props.item.Marca}</span>
                        <span>{props.item.Modelo}</span>
                    </h1>
                    <h1 className='preco-card'>{formatarPreco(props.item.preco)}</h1>
                    <button className='botao-comprar'>Comprar
                    <img className='imagem-carrinho' src='/image/carrinho-card.png' alt='carrinho-do-card'/>
                    </button>
                </div>
            </div>
        </main>
    )
}





