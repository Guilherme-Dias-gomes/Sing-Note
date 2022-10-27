export async function validarEnderecoCliente(endereco){
    if (endereco.cep == undefined || endereco.cep.trim() == '') {
        throw new Error('❌ cep é obrigatório!');
    }
    else if (endereco.rua == undefined || endereco.rua.trim()  == '') {
        throw new Error('❌Rua é obrigatória!');
    }
    else if (endereco.casa == undefined || endereco.casa.trim() == '') {
        throw new Error('❌ O número da casa é obrigatório!');
    }
    else if (endereco.referencia == undefined || endereco.referencia.trim() == '') {
        throw new Error('❌ A referência é obrigatória!');
    }
    else if (endereco.bairro == undefined || endereco.bairro.trim() == '') {
        throw new Error('❌Bairro é obrigatório!');
    }
    else if (endereco.cidade == undefined || endereco.cidade.trim() == '') {
        throw new Error('❌Cidade é  obrigatória!');
    }
    else if (endereco.uf == undefined || endereco.uf.trim() == '') {
        throw new Error('❌ UF é  obrigatório!');
    }
    else if (endereco.complemento == undefined || endereco.complemento.trim() == '') {
        throw new Error('❌O complemento é  obrigatório!');
    }
}

// Se não me engano falta algum async no controller ou repository, mas não coloquei pois não me recordo onde é https://github.com/Guilherme-Dias-gomes/Sing-Note.git 