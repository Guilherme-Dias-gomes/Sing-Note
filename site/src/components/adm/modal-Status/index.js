import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarPedidosPorId, alterarPedido } from '../../../api/admin/statusPedidoAPI'
import { toast } from 'react-toastify'
import './index.scss'

export default function AlterarStatus(){

    const { id } = useParams()
    const [ idPedido, setIdPedido ] = useState()
    const [ status, setStatus ] = useState('')

    async function salvarStatus(){
        try {
            if(!id !== null){ 
                await alterarPedido(status, id)
                toast.dark('Status alterados!');
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

        <main>
            <h1>Informe a situação desse produto</h1>
            <input 
                type="text" 
                value={status} 
                onChange={e => setStatus(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? salvarStatus() : ''}/>
            <button onClick={salvarStatus}>Salvar Status</button>
        </main>
    )
}