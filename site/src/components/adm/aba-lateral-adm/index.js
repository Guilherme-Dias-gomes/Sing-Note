import './index.scss'

export default function AbaLateralADM() {

return(

<div className="aba-lateral"> {/*Começo da aba lateral*/} 
            
            <div className="opcoes"> {/*Começo das opções*/}
                <div className="icone-opcoes"><img src="/image/silhueta-negra-de-casa-sem-porta 2.png" alt="opcao"/><a href='http://localhost:3000/' className="nome-icones">Home</a></div> 
                <div className="icone-opcoes"><img src="/image/lupa 2.png" alt="opcao"/><p className="nome-icones">Consulta</p></div>
                <div className="icone-opcoes"><img src="/image/add-button.png" alt="opcao"/><a href="http://localhost:3000/admin/produto" className="nome-icones">Cadastro</a></div>
                <div className="icone-opcoes"><img src="/image/carrinho-carrinho 2.png" alt="opcao"/><p className="nome-icones">Pedidos</p></div>
            </div> {/*Fim das opções*/}
        
        <div className="icone-opcoes"><img src="/image/Vector.png" alt="opcao"/><p className="nome-icones">Sair</p></div> 

</div> /*Fim da aba lateral*/
)}