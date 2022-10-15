import './index.scss'

import { toast } from 'react-toastify';
import { buscarProdutoPorNome, buscarProdutos,  removerProduto } from '../../../api/produtoAPI';
import CabecalhoAdm from '../../../components/adm/cabecalho-adm'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import CaixaProdutoUsuario from '../../../components/usuario/caixa-produto-usuario';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../api/config'
import { confirmAlert } from 'react-confirm-alert';


export default function ConsultaProduto () {
    const [produtos, setProdutos] = useState([]);

    const [imagem, setImagem] = useState('')
    const [buscar, setBuscar] = useState('')

    const navegar = useNavigate()

    async function carregarProdutos() {
        const r = await buscarProdutos();
        setProdutos(r);
    }


    async function filtrar(){
        const resposta = await buscarProdutoPorNome(buscar);
        setProdutos(resposta);
    }

    function exibirImagem(imagem) {
        if (imagem === undefined) {
            return '/image/imagespadrao.png';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }

    function editar(id){
        navegar(`/admin/alterar/${id}`)
    }

    async function deletarProduto(id, nome) {

        confirmAlert({
            title: 'Remover Produto',
            message: `Deseja remover o Produto ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await removerProduto(id, nome);
                            await carregarProdutos();
                            toast.dark('Produto Removido com sucesso 🎶')
                        } catch (err) {
                            toast.error(err.response.data.erro);
                        }
                    }
                },
                {
                    label: 'Não'
                }
                
            ]
        })
        
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
                    <input 
                        className='input-pesquisa' 
                        type="text" 
                        placeholder='Buscar por nome'
                        value={buscar} 
                        onChange={e => setBuscar(e.target.value)} 
                        onKeyPress={e => e.key === 'Enter' ? filtrar() : ''}
                    />
                    <button className='btn-buscar' onClick={filtrar}>Buscar</button>
                </div>
                <div className='area-cards-adm'>

                {produtos.map(item =>
                    <div className='Produtos-Info'>
                        <div className='id-imagens'>
                            <p>#{item.Id}</p>
                            <div>
                                <button onClick={() => editar(item.Id)}><img src='/image/lapis.png' alt='lapis'/></button>
                                <button onClick={() => deletarProduto(item.Id, item.Nome)}><img src='/image/lixo.png' alt='Lixeira'/></button>
                            </div>
                        </div>
                        <div className='espaco-produto'>
                            <img src={exibirImagem(item.Imagem)} className="ImagemProduto" alt='teste'/>
                            <div className='Info-Nome_Marca_Modelo'>
                                <span>{item.Nome}</span>
                                <span>{item.Marca}</span>
                                <span>{item.Modelo}</span>
                            </div>
                            <h2 className='Preco-Produto'>R$ <span>{item.Preco}</span></h2>          
                        </div>
                    </div>    
                )}
                
                </div>
            </div>
        </main>
    )
}