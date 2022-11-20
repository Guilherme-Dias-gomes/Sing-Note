
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import './index.scss'

export default function Politicas() {

    return (
        <main className='page-consulta-usu'>
            <div className='bola1politica'></div>
            <div className='bola2politica'></div>
            <div className='bola3politica'></div>
            <AbaLateralUSU />
            <div className='elementos-consulta-politica'>
                <div className='elemento-cabecalho-politica'>
                    <CabecalhoUSU />
                    
                    <div className="card">
                        <div className="conjunto">
                            <div className="titulo-politica">
                                <img src="/image/logo-redondo.png" alt="" />
                                <h1>Políticas do Site e Marketplace</h1>
                            </div>
                        </div>
                        <div className="texto-politica">
                            <p> Caro Cliente, aqui você encontrará informações importantes sobre os seus direitos e obrigações, bem
                                como dos procedimentos a serem adotados. Tais informações são importantes, assim, pedimos que você
                                as leia com toda atenção.<br /><br />
                                Qualquer dúvida entre em contato através dos nossos Canais de Atendimento disponíveis em nosso site.
                                O Cliente é o único responsável pela veracidade e legalidade dos dados e informações prestadas para
                                fins de cadastro e compras na plataforma E-commerce ...!<br /><br />
                                AVISO: A SingNote é uma E-commerce varejista, cuja venda de produtos é exclusivamente para o uso e
                                consumo, não sendo destinada a distribuição e/ou revenda em qualquer formato.

                            </p>
                        </div>
                    </div>
                </div>


                <RodapeUsuario />
            </div>

        </main>
    )
}
