import './index.scss'
import { API_URL } from '../../../api/config'


export default function ItemCarrinho(props) {


    return (
        <div className='component-item-carrinho'>
            <button>excluir todos</button>
            <img src='image/guitar 1.png' width='100em' alt=''></img>
            <div>
                <h1>{props.item.produto.info.produto}</h1>
                <h4>modelo do produto</h4>
            </div>
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <p>excluir</p>
            </div>
            <h3>Preço do produto</h3>
        </div>
    )
} 