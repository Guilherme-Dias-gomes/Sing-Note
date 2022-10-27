import './index.scss'

export default function CardEndereco ({ item: { referencia, rua, cep, bairro, cidade, casa, complemento,  uf } }) {
      
    
    return(
        <div className='card-endereco'>
            <div className='tipo'>{referencia}</div>
            <div>
                <div className='endereco'>{rua}, {casa} - {complemento}</div>
                <div className='cep'>{cep} - {bairro}, {cidade}/{uf}</div>
            </div>
        </div>
    )
}