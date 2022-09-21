import { loginAdmin } from '../../../../../api/src/repository/adminRepository';
import {useNavigate} from 'react-router-dom'
import {  useRef, useState} from 'react'



import './login.scss'



export default function Login () {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]   = useState('');
    const[carregando, setCarregando] = useState(false);

    const navegar = useNavigate();
    const ref = useRef();

    // useEffect(() => {
    //     if(storage('usuario-logado')){
    //     navegar('/slaa')
    //     }
    // }, [])

    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const resposta = await loginAdmin (email, senha);
            //storage('usuario-logado', resposta)

            setTimeout(() => {
                navegar('/slaa');
            }, 2000);

        } catch (err) {
            ref.current.complete();
            setCarregando(false);

            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }

    return(     
            <div className='page-login'>
                <form method='post' className='formulario'>

                    <h1 className='titulo-form'><span><img src='/image/img-perfilzinho.png' alt='' width='34px'></img></span>Login ADM</h1>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='email'>Email</label>
                        <input className='input-form' type='email' id='email' placeholder="" autoComplete='off'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                        
                    </div>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='senha'>Senha</label>
                        <input className='input-form' type='password' id='senha' placeholder=""
                        value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    
                    <button className='btn-login' onClick={entrarClick}
                 disabled={carregando}>Entrar</button>

                </form>
            </div>
            
    )
}