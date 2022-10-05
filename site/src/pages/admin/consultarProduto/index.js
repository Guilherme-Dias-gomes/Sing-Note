import './index.scss'

import { toast } from 'react-toastify';
import { buscarProdutoPorNome, buscarProdutos,  removerProduto } from '../../../api/produtoAPI';
import CabecalhoAdm from '../../../components/adm/cabecalho-adm'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import { useEffect, useState } from 'react';

export default function ConsultaProduto () {
    const [produtos, setProdutos] = useState([]);

    const [buscar, setBuscar] = useState('')

    async function carregarProdutos() {
        const r = await buscarProdutos();
        setProdutos(r);
    }

    async function filtrar(){
        const resposta = await buscarProdutoPorNome(buscar);
        setBuscar(resposta);
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

                <div className='elementos-pesquisa'>  
                    <input className='input-pesquisa' 
                           type="search" 
                           placeholder='Buscar por nome'
                           value={buscar} onChange={e => setBuscar(e.target.value)} />
                    <button className='btn-buscar' onClick={filtrar}>Buscar</button>
                </div>

                {produtos.map(item =>
                <div className='Produtos-Info'>
                    <div className='id-imagens'>
                        <p>#{item.Id}</p>
                        <div>
                            <button><img src='/image/lapis.png' alt='lapis'/></button>
                            <button><img src='/image/lixo.png' alt='Lixeira'/></button>
                        </div>
                    </div>

                    <div className='espaco-produto'>
                        {item.Imagem}
                        <div className='Info-Nome_Marca_Modelo'><span>{item.Nome} </span>
                                                                <span>{item.Marca} </span>
                                                                <span>{item.Modelo}</span>
                        </div>

                        <h2 className='Preco-Produto'>R$ <span>{item.Preco}</span></h2>          
                    </div>
                </div>    
                )}
                
            </div>

            
            
        </main>
    )
}