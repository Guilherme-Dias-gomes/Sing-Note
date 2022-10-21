import './index.scss'
import { useState } from 'react'


import { listar } from '../../api/enderecoAPI'

export default function Pedido () {
    const [enderecos, setEnderecos] = useState ([]);


    


async function carregarEnderecos (){
    const cep =  Storage ('Cliente')
    const r = await listar ();
    setEnderecos (r); 


}

useEffect (() => {
    carregarEnderecos ();

}, [] )

}


return  