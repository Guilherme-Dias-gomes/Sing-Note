import axios from 'axios'
const api = axios.create({ 
    baseURL:'http://localhost:5000'
});



export async function login(email, senha){
    const resposta = await api.post('/login/admin', {
        email:email,
        senha:senha
    });

    return resposta.data
}