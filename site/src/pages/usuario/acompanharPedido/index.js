import { useEffect, useState } from 'react'
// import CardAcompanhar from '../../../components/usuario/cardAcompanharPedido/index.js'
import storage from 'local-storage'
import { buscarTodosPedidos } from '../../../api/admin/statusPedidoAPI.js'
import { mostrarPedidosUsuario } from '../../../api/usuario/pedidoAPI.js'
import './index.js'


export default function Acompanhar() {

    const lerIdUsuario = storage('Cliente-Logado').id
    const [pedido, setPedido] = useState([])


    async function carregarPedidos() {
        const r = await mostrarPedidosUsuario(lerIdUsuario);
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
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.modelo}</td>
                        <td>{item.status}</td>
                    </tr>
                </tbody>
            )}
        </div>
    )
}