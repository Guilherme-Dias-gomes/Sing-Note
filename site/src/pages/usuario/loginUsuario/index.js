import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function LoginUsuario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate;


    async function entrarClick() {
        const r = await axios.post('http://localhost:5000/usuario/login', {
            email: email,
            senha: senha
        })
        if(r.status === (401)) {
            setErro(r.data.erro);
        }else {
            navigate('/usuario/busca')
        }
    }
    return(
        <main className='page-login-usuario'>
        <form className='formulario'
        >

            <h1 className='titulo-form'><span><img src='/src/assets/images/usu.png' alt='' width='34px'></img></span>Login</h1>

            <div className='form-group'>
                <label className='label-form' htmlFor='email'>Email</label>
                <input className='input-form' type='email' placeholder="Digite o email" value={email} onChange={e => setEmail(e.target.value)}/>

            </div>

            <div className='form-group'>
                <label className='label-form' >Senha</label>
                <input className='input-form' type='password' placeholder="***" value={senha} onChange={e => setSenha(e.target.value)}/>
            </div>

            <button className='btn-login' onClick={entrarClick}>Entrar</button>
            <div className='form-entrar-invalido'>
                {erro}
            </div>
        </form>
    </main>
    )
}