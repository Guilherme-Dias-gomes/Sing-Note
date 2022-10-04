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
                <div className='elementos-pesquisa'>  
                    <input className='input-pesquisa' type="search" placeholder='Buscar por nome' ></input>
                    <button className='btn-buscar'>Buscar</button>
                </div>
                <div className='cards-produto'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Estoque</th>
                                <th>Preço</th>
                                <th>Tipo</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map(item =>
                                <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.Nome}</td>
                                    <td>{item.Modelo}</td>
                                    <td>{item.Marca}</td>
                                    <td>{item.Preco}</td>
                                    <td><span>Editar</span></td>
                                    <td><button onClick={() => deletarProduto(item.Id)}>Remover</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </main>
    )
}