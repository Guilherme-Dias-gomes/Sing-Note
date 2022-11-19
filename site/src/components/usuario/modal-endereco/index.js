import './index.scss'
import { toast } from 'react-toastify'
import { useState } from 'react';
import Storage from 'local-storage'
import { salvarEnderecoUsuario} from '../../../api/usuario/enderecoClienteAPI.js';



export default function ModalEndereco({ exibir, fechar }) {

    const [referencia, setReferencia] = useState('');
    const [cep, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [casa, setCasa] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');

    async function salvarEndereco() {
        try {
            const id = Storage('Cliente-Logado').id;
            const r = await salvarEnderecoUsuario(id, cep, rua, casa, referencia, bairro, cidade, uf, complemento);
            toast.dark('Endereço salvo');

            fechar();
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }


    return (
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <div className='titulo-e-btnFechar'>
                        <h1 className='titulo-card-pgt'> Novo Endereço </h1>
                        <h1 className='btnFechar' onClick={fechar}>X</h1>
                    </div>
                    <div className='form'>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Referência: </label>
                            <input className='input-pagamento-card' type='text' value={referencia} onChange={e => setReferencia(e.target.value)} />
                        </div>

                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'>CEP:</label>
                            <input className='input-pagamento-card' type='text' value={cep} onChange={e => setCEP(e.target.value)} />
                        </div>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Rua: </label>
                            <input className='input-pagamento-card' type='text' value={rua} onChange={e => setRua(e.target.value)} />
                        </div>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Número: </label>
                            <input className='input-pagamento-card' type='text' value={casa} onChange={e => setCasa(e.target.value)} />
                        </div>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Complemento: </label>
                            <input className='input-pagamento-card' type='text' value={complemento} onChange={e => setComplemento(e.target.value)} />
                        </div>

                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Bairro: </label>
                            <input className='input-pagamento-card' type='text' value={bairro} onChange={e => setBairro(e.target.value)} />
                        </div>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Cidade: </label>
                            <input className='input-pagamento-card' type='text' value={cidade} onChange={e => setCidade(e.target.value)} />
                        </div>
                        <div className='formatacao-input-informacao-cartao-card'>
                            <label className='titulo-input-pagamento-card'> Estado: </label>
                            <input className='input-pagamento-card' type='text' value={uf} onChange={e => setUF(e.target.value)} />
                        </div>
                        <div>
                            <label></label>
                            <div className='btn'>
                                <button onClick={salvarEndereco} className='botao-salvar-pgt'> Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}