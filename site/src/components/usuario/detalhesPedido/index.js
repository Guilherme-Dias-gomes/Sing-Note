import './index.scss'

export default function DetalhesProduto() {



    return (
        <div>
            <div className='itens-carrinho'>
                <img src='' className='imagem-produto-no-carrinho' alt='img-produto-carrinho' />
                <div className='item-nome-e-detalhes'>
                    <h1 className='nome-produto-carrinho'>a</h1>
                    <p className='descricao-produto-carrinho'>a</p>

                </div>
                <h3>R$</h3>
                <div>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <p>Excluir</p>
                </div>
                <h4>subTotal:</h4>
            </div>
            )
        </div>
    )
}