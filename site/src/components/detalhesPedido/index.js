import './index.scss'

export default function DetalhesProduto() {



    return (
        <div>
            <div className='itens-carrinho'>
                <img src='' className='imagem-produto-no-carrinho' alt='img-produto-carrinho' />
                <div className='item-nome-e-detalhes'>
                    <h1 className='nome-produto-carrinho'>{info.Nome}</h1>
                    <p className='descricao-produto-carrinho'>{info.Modelo}</p>

                </div>
                <h3>R${info.Preco}</h3>
                <div>
                    <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <p onClick={remover}>Excluir</p>
                </div>
                <h4>subTotal:{calcSubTotal()}</h4>
            </div>
            )
        </div>
    )
}