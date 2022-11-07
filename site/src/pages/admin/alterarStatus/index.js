import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarPedidosPorId } from '../../../api/admin/statusPedidoAPI'
import './index.scss'



export default function AlterarStatus(){

    const [ nome, setNome ] = useState('')

    const [ pedido, setPedido ] = useState([])

    const id = useParams()

    async function carregarPedidos(){
        const r = await buscarPedidosPorId(id);
        console.log(r)
        setPedido(r);
    }

    useEffect(() => {
        carregarPedidos()
    }, [])

    return(
        <main>
            {pedido.map( item =>
                <div>
                    {item.Nome}
                </div>    
            )}
            hello
        </main>
    )
}