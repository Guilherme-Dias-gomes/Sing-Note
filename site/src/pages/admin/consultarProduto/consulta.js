import './consulta.scss'

import { toast } from 'react-toastify';
import { buscarProdutos, removerProduto } from '../../../api/produtoAPI';
import CabecalhoAdm from '../../../components/adm/cabecalho-adm'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import { useEffect, useState } from 'react';

export default function ConsultaProduto () {
    const [produtos, setProdutos] = useState([]);

    async function carregarProdutos() {
        const r = await buscarProdutos();
        setProdutos(r);
    }

    async function deletarProduto(id) {
        try {
            await removerProduto(id);
            await carregarProdutos();
            toast.dark('Produto Removido com sucesso 🎶')
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    useEffect(() => {
            carregarProdutos();
    }, []);

    

    return(
        <main className='page-consulta'>
            <AbaLateralADM/>
            <div className='elementos-consulta'>
                <CabecalhoAdm/>

                {produtos.map(item =>
                <div className='Produtos-Info'>
                    <div className='id-imagens'>
                        <p>#{item.id}</p>
                        <div>
                            <button><img src='/image/lapis.png' alt='lapis'/></button>
                            <button><img src='/image/lixo.png' alt='Lixeira'/></button>
                        </div>
                    </div>

                    <div className='espaco-produto'>
                        <img src={item.imagem} className='ImagemProduto' alt='img-produto'/>

                        <h3 className='Info-Produto'><span>{item.produto} </span>
                                                    <span>{item.marca} </span>
                                                    <span>{item.modelo}</span>
                        </h3>

                        <h2 className='Preco-Produto'>R$ <span>{item.preco}</span></h2>          
                    </div>
                </div>    
                )}
                
            </div>

            
            
        </main>
    )
}