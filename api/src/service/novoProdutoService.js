import randomString from 'randomstring'

import { atualizarCupom, buscarCupom } from '../repository/usuario/cupomRepository.js';


export async function acharCupom(cod) {

    let idCupom = null; 
    
    const cupom = await buscarCupom(cod)
    if (cupom) {
        if (cupom.restante > 0) {
            idCupom = cupom.id;
            await atualizarCupom(cod)
        }
    }
    return idCupom
}

export function criarNotaFiscal() {
    return randomString.generate(11);
}

export function lerValorFrete(frete) {
    if(frete === 'normal'){
        return 10.00;
    } else {
        return 25.00;
    }
}

export function criarNovoPedido(idUsario, idCupom, info) {
    let agora = new Date();
    let valorFrete = lerValorFrete(info.frete)
    let notaFiscal = criarNotaFiscal();
    return {
        idUsuario: idUsario,
        idEndereco: info.idEndereco,
        idCupom: idCupom,
        data: agora,
        notaFiscal: notaFiscal,
        tipoFrete: info.frete,
        valorFrete: valorFrete,
        status: 'Pagamento Feito',
        tipoPagamento: 'Cartão'
    }
}