import './index.scss'


export default function CaixaProdutoUsuario () {

    return(
        <main className='caixinha-produto-usuario'>
            <div className='espaco-produto'>
                <img className='imagem-coracao' src='/image/coracao-card.png' alt='coracao-do-card'/>
                <div className='descricao-card'>
                    <img className='imagem-produto-card' src='/image/bateria.png' alt='produto-do-card'/>
                    <h1 className='card-produto-descricao'>Bateria Tama Starclassic Performer MBS42RZS CAR 4PC</h1>
                    <h1 className='preco-card'>R$ 13.224,34</h1>
                    <button className='botao-comprar'>Comprar
                    <img className='imagem-carrinho' src='/image/carrinho-card.png' alt='carrinho-do-card'/>
                    </button>
                </div>
            </div>
        </main>
    )
}