import './login.scss'

export default function Login () {

    return(
        <main className='page-login'>
                <img className='img-guitarra' src='/image/image-tela-login-adm.png' alt=''></img>
            <div className='login-adm'>

                <h1> <span><img src='/image/img-perfilzinho.png' alt='' width='27px' ></img></span> Login ADM</h1>

                <div className='informacoes-login'>
                    <div className='informacoes-email'>
                        <label className='input-label' fro='email'>Email</label>
                        <input className='input' type='email' id='email'></input>
                        <br/> <br/>
                    </div>
                    <div className='informacoes-senha'>
                        <label className='input-label' for='senha'>Senha</label>
                        <input className='input' type='password' id='senha'></input>
                    </div>
                </div>

                <button className='btn-login'>Entrar</button>

            </div>

        </main>
    )
}