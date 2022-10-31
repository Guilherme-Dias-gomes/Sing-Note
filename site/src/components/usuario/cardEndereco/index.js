import './index.scss'

export default function CardEndereco ({ item: { id, referencia, rua, cep, bairro, cidade, casa, complemento,  uf },  selecionar, selecionado} ) {
      
    
    return(
        <div className='card-endereco' onClick={() => selecionar(id)} style={{borderColor: selecionado ? '#007BF1': '#a3a3a3'}}>
            <div className='tipo'>{referencia}</div>
            <div>
                <div className='endereco'>{rua}, {casa} - {complemento}</div>
                <div className='cep'>{cep} - {bairro}, {cidade}/{uf}</div>
            </div>
        </div>
    )
}