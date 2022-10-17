import { useState, useRef, useEffect } from 'react'
import { Logar } from '../../../api/usuario/usuarioLoginAPI';
import { toast } from 'react-toastify'

import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

import './index.scss'

export default function LoginUsuario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navegar = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('Usuario-Logado')){
            navegar('/usuario/busca');
        }   
    }, [])

    async function LogarCliente (e) {

        setCarregando(true)
        e.preventDefault()
        ref.current.continuousStart()

            try {
                const r = await Logar(email, senha);

                storage('cliente-logado', r)
                
                toast.dark('Usuario-Logado', { autoClose: 400, hideProgressBar: true });

                setTimeout(() => {
                    navegar('/usuario/busca');
                }, 1500);
                
            } catch (err) {
                ref.current.complete();
                setCarregando(false)

                toast.error(err.response.data.erro)
            }
    }
    
    return(
        <div className='page-login-usuario'>
            <LoadingBar color='#f11946' ref={ref} />
                <form className='formulario'>
                   <p>thawann.silva34@gmail.com</p>
                   <p>1234</p>

                    <h1 className='titulo-form'><span><img src='/image/img-perfilzinho.png' alt='' width='34px'></img></span>Login</h1>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='email'>Email</label>
                        <input 
                            className='input-form' 
                            type='email' id='email' 
                            placeholder="Digite o email adiministrativo:" 
                            autoComplete='off'
                            value={email} 
                            onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='senha'>Senha</label>
                        <input 
                            className='input-form' 
                            type='password' 
                            id='senha' 
                            placeholder="***"
                            value={senha} 
                            onChange={e => setSenha(e.target.value)}/>
                    </div>
                    
                    <button 
                        className='btn-login-usuario' 
                        onClick={LogarCliente} 
                        disabled={carregando}>
                        Entrar
                    </button>
                </form>
            </div>
            
    )
}