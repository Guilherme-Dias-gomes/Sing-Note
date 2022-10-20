import './index.scss'
import { API_URL } from '../../../api/config'
import { useState } from 'react';
import Storage from 'local-storage'


export default function ItemCarrinho({ item: {produto: { info, imagens }, qtd }, removerItem, carregarCarrinho }) {
    const [qtdProduto, setQtdProduto] = useState(qtd)

    function remover() {
        removerItem(info.Id)
    }

    function exibirImagem() {
        if(imagens.length > 0) {
            return API_URL + '/' + imagens[0];
        }else {
            return '/image/imagespadrao.png'
        }
    }

    function calcSubTotal () {
        const subTotal = qtdProduto * info.Preco;
        return(subTotal);
    }

    function alterarQuantidade (novaQTD) {
        console.log(novaQTD)
        setQtdProduto(novaQTD);
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.Id);
        itemStorage.qtd = novaQTD;

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    return (
                <div className='itens-carrinho'>
                    <img src={exibirImagem} className='imagem-produto-no-carrinho' alt='img-produto-carrinho' />
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
}
