import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscarPedidosPorId, alterarPedido } from '../../../api/admin/statusPedidoAPI'
import { toast } from 'react-toastify'
import './index.scss'

export default function AlterarStatus({ exibir, fechar }){

    const { id } = useParams()
    const [ idPedido, setIdPedido ] = useState()
    const [ status, setStatus ] = useState('')
    const navegar = useNavigate()

    async function salvarStatus(){
        try {
            if(!id !== null){ 
                await alterarPedido(status, id)
                toast.dark('Status alterados!');
                navegar('/admin/pedidos')
            }
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    async function carregarPedidos(){
        if(!id)
            return

        const r = await buscarPedidosPorId(id);
        setIdPedido(r.id)
        setStatus(r.status);
    }

    useEffect(() => {
        carregarPedidos();
    }, [])

    return(
      
        <div className='modal-status'>
            <h1 className='Titulo-Status'>Informe a situação do pedido: {id}</h1>
            <div className='alterar'>
                <input 
                    type="text" 
                    value={status} 
                    onChange={e => setStatus(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? salvarStatus() : ''}/>
                <div className='botao'>
                    <button onClick={salvarStatus}>Salvar Status</button>
                </div>
            </div>
        </div>
      
    )
}