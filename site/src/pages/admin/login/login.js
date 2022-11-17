import { login } from '../../../api/admin/adminloginAPI'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import storage from 'local-storage'

import './login.scss'



export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navegar = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('usuario-logado')) {
            navegar('/');
        }

    }, [])

    async function entrarClick(e) {
        setCarregando(true)
        e.preventDefault()
        ref.current.continuousStart()

        try {
            const r = await login(email, senha);
            storage('usuario-logado', r)

            setTimeout(() => {
                navegar('/')
            }, 3000);


        } catch (err) {
            ref.current.complete();
            setCarregando(false)
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <div className='page-login'>
            <LoadingBar color='#f11946' ref={ref} />
            <form className='formulario'>

                <h1 className='titulo-form'><span><img src='/image/img-perfilzinho.png' alt='' width='34px'></img></span>Login ADM</h1>

                <div className='form-group'>
                    <label className='label-form' htmlFor='email'>Email</label>
                    <input className='input-form' type='email' id='email' placeholder="Digite o email adiministrativo:" autoComplete='off'
                        value={email} onChange={e => setEmail(e.target.value)} />

                </div>

                <div className='form-group'>
                    <label className='label-form' htmlFor='senha'>Senha</label>
                    <input className='input-form' type='password' id='senha' placeholder="***"
                        value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button className='btn-login' onClick={entrarClick} disabled={carregando}>Entrar</button>
                <div className='form-entrar-invalido'>
                    {erro}
                </div>
            </form>
        </div>

    )
}