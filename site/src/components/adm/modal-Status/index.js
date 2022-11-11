import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarPedidosPorId } from '../../../api/admin/statusPedidoAPI'
import './index.scss'



export default function AlterarStatus(){

    const [ produto, setProduto ] = useState('')
    const [ imagem , setImagem ]   = useState('')
    const [ nomeUsuario, setNomeUsuario ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ dataPedido, setDataPedido ] = useState()
    const [ pedido, setPedido ] = useState([]);

    const id = useParams();

    async function carregarPedidos(){
        if(!id)
            return

        const r = await buscarPedidosPorId(id);
        console.log(r)
        setProduto(r[0].produto);
    }

    useEffect(() => {
        carregarPedidos();
    }, [])

    return(
        <main>
            <h1>Produto:</h1>
            <input value={produto} onChange={e => setProduto(e.target.value)}/>
            {pedido.map( item =>
                <div>
                    {item.id}
                </div>    
            )}
            hello
        </main>
    )
}