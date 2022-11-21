import './index.scss'

import { toast } from 'react-toastify';
import { buscarProdutoPorNome, buscarProdutos,  removerProduto } from '../../../api/admin/produtoAPI';
import CabecalhoAdm from '../../../components/adm/cabecalho-adm'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
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
        if (!imagem) {
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
        navegar(`/admin/produto/${id}`)
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
                <div className='elementos-pesquisa-consulta-adm'>  
                    <input 
                        className='input-pesquisa-adm-consulta' 
                        type="text" 
                        placeholder='Buscar por nome'
                        value={buscar} 
                        onChange={e => setBuscar(e.target.value)} 
                        onKeyPress={e => e.key === 'Enter' ? filtrar() : ''}
                    />
                    
                    {/* <p className='produto-total-adm'>Produtos no total: <span className='produto-total-adm-qtd'>10</span></p> */}
                </div>
                <div className='area-cards-adm'>

                {produtos.map(item =>
                    <div className='Produtos-Info'>
                        <div className='id-imagens'>
                       
                            
                            <div>
                                <img src='/image/lapis.png' alt='lapis' onClick={() => editar(item.Id)}/>
                                <img src='/image/lixo.png' alt='Lixeira' onClick={() => deletarProduto(item.Id, item.Nome)}/>
                            </div>
                        </div>
                        <div className='espaco-produto'>
                            <div className='quadrado-unidades'>
                                <p className='quadrado-texto'>Restam</p>
                                <p className='quadrado-qtd-unidade'>{item.Estoque}</p>
                                <p className='quadrado-texto'>Unid.</p>
                            </div>
                            <img src={exibirImagem(item.Imagem)} className="ImagemProduto" alt='teste'/>
                            <div className='Info-Nome_Marca_Modelo'>
                                <span>{item.Nome.substr(0,15)}</span>
                                <span>{item.Marca}</span>
                                <span>{item.Modelo.substr(0,15)}</span>
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

