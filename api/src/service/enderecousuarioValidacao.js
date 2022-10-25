export async function validarenderecoCliente(usuario){
    if (usuario.cep == undefined || usuario.cep == ''.trim ()) {
        throw new Error('❌ cep é obrigatório!');
    }
    else if (usuario.rua == undefined || usuario.rua  == '' .trim ()) {
        throw new Error('❌Rua é obrigatória!');
    }
    else if (usuario.casa == undefined || usuario.casa == ''.trim ()) {
        throw new Error('❌ O número da casa é obrigatório!');
    }
    else if (usuario.referencia == undefined || usuario.referencia == '' .trim ()) {
        throw new Error('❌ A referência é obrigatória!');
    }
    else if (usuario.bairro == undefined || usuario.bairro == '' .trim ()) {
        throw new Error('❌Bairro é obrigatório!');
    }
    else if (usuario.cidade == undefined || usuario.cidade == '' .trim ()) {
        throw new Error('❌Cidade é  obrigatória!');
    }
    else if (usuario.uf == undefined || usuario.uf == '' .trim ()) {
        throw new Error('❌ UF é  obrigatório!');
    }
    else if (usuario.complemento == undefined || usuario.complemento == ''.trim ()) {
        throw new Error('❌O complemento é  obrigatório!');
    }
}

// Se não me engano falta algum async no controller ou repository, mas não coloquei pois não me recordo onde é  