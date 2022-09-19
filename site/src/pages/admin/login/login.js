import './login.scss'

export default function Login () {

    return(     
            <div className='page-lgoin'>
                <form method='post' className='formulario'>

                    <h1 className='titulo-form'>Login ADM</h1>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='email'>Email</label>
                        <input className='input-form' type='email' id='email' placeholder="" autoComplete='off'></input>
                    </div>

                    <div className='form-group'>
                        <label className='label-form' htmlFor='senha'>Senha</label>
                        <input className='input-form' type='password' id='senha' placeholder=""></input>
                    </div>
                    
                    <button className='btn-login'>Entrar</button>

                </form>
            </div>
            
    )
}