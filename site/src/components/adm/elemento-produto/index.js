import { deletarProduto } from '../../../api/produtoAPI'
import './index.scss'


export default function ElementoProduto () {

    return(
        <main className='page-produto'>
            <div className='id-imagens'>
                <p>1#</p>
                <div>
                    <button><img src='/image/lapis.png' alt='lapis'></img></button>
                    <button onClick={() => deletarProduto()}><img src='/image/lixo.png' alt=''></img></button>
                </div>
            </div>
            <div className='espaco-produto'>
                    
            </div>
        </main>
    )
}