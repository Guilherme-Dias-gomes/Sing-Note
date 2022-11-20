
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'
import RodapeUsuario from '../../../components/usuario/rodape-usuario'
import './index.scss'

export default function SobreNos() {

    return (
        <main className='page-consulta-usu'>
            <div className='bola1sobre'></div>
            <div className='bola2sobre'></div>
            <div className='bola3sobre'></div>
            <AbaLateralUSU />
            <div className='elementos-consulta-sobre'>
                <div className='elemento-cabecalho-sobre'>
                    <CabecalhoUSU />
                    
                    <div className="card">
                        <div className="conjunto">
                            <div className="titulo-sobre">
                                <img src="/image/logo-redondo.png" alt="" />
                                <h1>Sobre a  Sing Note</h1>
                            </div>
                        </div>
                        <div className="texto-sobre">
                            <p> Fundado em 2003, a sing note! foi um dos pioneiros no comércio isntrumental 
                                brasileiro e hoje é o maior e-commerce do segmento instrumental na América 
                                Latina. Desde sua criação, a empresa é formada por histórias e conquistas de 
                                um time obcecado por agilidade, qualidade de atendimento, velocidade de 
                                entrega e respeito pelo consumidor. <br/><br/>

                                Com preços imbatíveis e mais de 20 mil produtos em seu catálogo, a sing note 
                                está sempre à frente e traz em primeira mão os melhores lançamentos do mercado 
                                mundial. São mais de 8 milhões de pessoas atendidas e entregas realizadas em 
                                todas as regiões do país, totalizando mais de 5.000 cidades. <br/><br/>

                                O e-commerce é um dos sites mais acessados do país e lidera o ranking das 
                                lojas virtuais mais recomendadas pelos consumidores brasileiros, no segmento 
                                de instrumentos musicais*, com os principais índices de avaliação e selos de 
                                qualidade da internet. <br/><br/>

                                Procuramos acima de tudo oferecer o que há de melhor, os melhores 
                                fornecedores, os mais atualizados produtos, o mais atencioso dos atendimentos,
                                 juntamente com os preços mais competitivos e atraentes do mercado para que 
                                 nosso público encontre não apenas variedade e qualidade, mas também uma 
                                 empresa que se preocupa com a felicidade e total satisfação de seus clientes 
                                 e por que não, amigos!
                            </p>
                        </div>
                    </div>
                </div>
                <RodapeUsuario />
            </div>

        </main>
    )
}
