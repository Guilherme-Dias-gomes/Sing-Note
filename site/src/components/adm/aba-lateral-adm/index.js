import './index.scss'

export default function AbaLateralADM() {

return(

<div className="aba-lateral"> {/*Começo da aba lateral*/} 
            
            <div className="opcoes"> {/*Começo das opções*/}
                <div className="icone-opcoes"><img src="/image/silhueta-negra-de-casa-sem-porta 2.png" alt="opcao"/><p className="nome-icones">Home</p></div> 
                <div className="icone-opcoes"><img src="/image/lupa 2.png" alt="opcao"/><p className="nome-icones">Consulta</p></div>
                <div className="icone-opcoes"><img src="/image/add-button (1) 3.png" alt="opcao"/><p className="nome-icones">Cadastro</p></div>
                <div className="icone-opcoes"><img src="/image/carrinho-carrinho 2.png" alt="opcao"/><p className="nome-icones">Pedidos</p></div>
            </div> {/*Fim das opções*/}
        
        <div className="icone-opcoes"><img src="/image/Vector.png" alt="opcao"/><p className="nome-icones">Sair</p></div> 

</div> /*Fim da aba lateral*/
)}