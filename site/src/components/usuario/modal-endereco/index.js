import './index.scss'
import { toast } from 'react-toastify'
import { useState } from 'react';
import Storage from 'local-storage'
import { salvarEnderecoUsuario } from '../../../api/usuario/enderecoClienteAPI.js';

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
                    <h1> Novo Endereço </h1>

                    <div className='form'>
                        <div>
                            <label> Referência: </label>
                            <input type='text' value={referencia} onChange={e => setReferencia(e.target.value)} />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> CEP: </label>
                            <input type='text' value={cep}  onChange={e => setCEP(e.target.value)}  />
                        </div>
                        <div>
                            <label> Rua: </label>
                            <input type='text' value={rua}  onChange={e => setRua(e.target.value)}  />
                        </div>
                        <div>
                            <label> Número: </label>
                            <input type='text' value={casa}  onChange={e => setCasa(e.target.value)}  />
                        </div>
                        <div>
                            <label> Complemento: </label>
                            <input type='text' value={complemento}  onChange={e => setComplemento(e.target.value)}  />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> Bairro: </label>
                            <input type='text' value={bairro}  onChange={e => setBairro(e.target.value)}  />
                        </div>
                        <div>
                            <label> Cidade: </label>
                            <input type='text' value={cidade}  onChange={e => setCidade(e.target.value)}  />
                        </div>
                        <div>
                            <label> Estado: </label>
                            <input type='text' value={uf}  onChange={e => setUF(e.target.value)}  />
                        </div>
                        <div>
                            <label></label>
                            <div className='btn'>
                                <button onClick={salvarEndereco}> Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}