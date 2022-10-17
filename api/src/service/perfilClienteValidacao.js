export async function validarPerfilCliente(usuario){
    if (usuario.nomeUsuario == undefined || usuario.nomeUsuario == '') {
        throw new Error('❌Nome é obrigatório!');
    }
    else if (usuario.rg == undefined || usuario.rg  == '') {
        throw new Error('❌RG é obrigatório!');
    }
    else if (usuario.cpf == undefined || usuario.cpf == '') {
        throw new Error('❌CPF é obrigatório!');
    }
    else if (usuario.nascimento == '//') {
        throw new Error('❌Data de Nascimento é obrigatório!');
    }
    else if (usuario.telefone == undefined || usuario.telefone == '') {
        throw new Error('❌Telefone obrigatório!');
    }
}