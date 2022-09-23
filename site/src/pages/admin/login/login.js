import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useState} from 'react'



import './login.scss'



export default function Login () {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]   = useState('');

    const navegar = useNavigate();

    async function entrarClick(e){
        e.preventDefault()

        try {
            const r = await axios.post('http://localhost:5000/login/admin', {
                email: email,
                senha: senha
            });
            
            navegar('/login/admin/produto');

        }catch (err) {
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return(     
            <div className='page-login'>
                <form className='formulario'
                    onSubmit={entrarClick}
                >

                    <h1 className='titulo-form'><span><img src='/image/img-perfilzinho.png' alt='' width='34px'></img></span>Login ADM</h1>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='email'>Email</label>
                        <input className='input-form' type='email' id='email' placeholder="Digite o email adiministrativo:" autoComplete='off'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                        
                    </div>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='senha'>Senha</label>
                        <input className='input-form' type='password' id='senha' placeholder="***"
                        value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    
                    <button className='btn-login'>Entrar</button>
                    <div className='form-entrar-invalido'>
                        {erro}
                    </div>
                </form>
            </div>
            
    )
}