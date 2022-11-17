import { useEffect, useState } from 'react'
// import CardAcompanhar from '../../../components/usuario/cardAcompanharPedido/index.js'
import { buscarTodosPedidos } from '../../../api/admin/statusPedidoAPI.js'

import './index.js'


export default function Acompanhar() {
    const [pedido, setPedido] = useState([])

    async function carregarPedidos() {
        const r = await buscarTodosPedidos();
        setPedido(r);
    }

    useEffect(() => {
        carregarPedidos();
    }, [])

    return (
        <div>
            {pedido.map(item =>
                <tbody>
                    <tr>
                        <td>{item.nome}</td>
                        <td>{item.modelo}</td>
                        <td>{item.Situacao_do_Pedido}</td>
                    </tr>
                </tbody>
            )}
        </div>
    )
}