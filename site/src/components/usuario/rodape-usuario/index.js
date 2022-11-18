import "./index.scss"
import { Link } from "react-router-dom"

export default function RodapeUsuario() {
    return (
        <main className="main-rodape-usu">
            <div className="primeira-coluna">
                <h1 className="titulo-colunas-rodape-usu">Departamentos</h1>
                <div className="primeira-parte">
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Violão</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Guitarra</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Bateria</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Baixo</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Piano</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Percussão</Link></p>
                    <p className="descricao-colunas-rodape-usu"><Link style={{color:'#fff'}} to={'/usuario/busca'}>Flauta</Link></p>
                </div>
            </div>
            <div className="segunda-coluna">
                <h1 className="titulo-colunas-rodape-usu"> Institucional</h1>
                <p className="descricao-colunas-rodape-usu"> Sobre a Sing Note</p>
                <p className="descricao-colunas-rodape-usu">Políticas do Site e Marketplace</p>
                <div className="parte-minha-conta">
                    <h1 className="titulo-colunas-rodape-usu">Minha Conta</h1>
                    <p className="descricao-colunas-rodape-usu"> Meus Pedidos</p>
                </div>
            </div>
            <div className="terceira-coluna">
                <h1 className="titulo-colunas-rodape-usu-diferentao"> Atendimento</h1>
                <p className="descricao-colunas-rodape-usu-diferentao"> Horário de Atendimento:</p>
                <p className="descricao-colunas-rodape-usu-diferentao"> 08:00 às 20:00 -</p>
                <p className="descricao-colunas-rodape-usu-diferentao"> Segunda à Sábado, </p>
                <p className="descricao-colunas-rodape-usu-diferentao"> horário de Brasília</p>
                <p className="descricao-colunas-rodape-usu-diferentao">(Exceto domingo e feriados)</p>
            </div>
            <div className="quarta-coluna">
                <h1 className="titulo-colunas-rodape-usu">Mídias sociais</h1>
                <div className="redes-rodape-usu">
                    <div className="bolinha-midias-sociais">
                        <img src="/image/midia-facebook.png" className="rodape-icn-redes-fb" />
                    </div>
                    <div className="bolinha-midias-sociais">
                        <img src="/image/midia-twitter.png" className="rodape-icn-redes" />
                    </div>
                    <div className="bolinha-midias-sociais">
                        <img src="/image/midia-insta.png" className="rodape-icn-redes" />
                    </div>
                </div>
                <div className="parte-fale-conosco">
                    <h1 className="titulo-colunas-rodape-usu">Email</h1>
                    <p className="descricao-colunas-rodape-usu">faleconosco@sgn.com.br</p>
                </div>
            </div>

        </main>
    )
}
