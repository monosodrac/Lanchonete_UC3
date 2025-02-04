import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { useParams, useNavigate } from 'react-router-dom';
import apiLocal from '../../Api/apiLocal';
import { toast } from 'react-toastify';

export default function EditarPerfil() {
    const mudarTela = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    useEffect(() => {
        try {
            async function consultarDados() {
                const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                    id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setPassword(resposta.data.senha);
            };
            consultarDados();
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            });
        };
        // eslint-disable-next-line
    }, []);

    async function enviarAlteracao(e) {
        try {
            e.preventDefault()
            await apiLocal.put('/AlterarDadosUsuarios', {
                id,
                nome,
                email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Cadastro Alterado com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/');
        } catch (err) {
            console.log(err.response)
            // toast.error('Erro ao Comunicar com o Servidor', {
            //     toastId: 'ToastId'
            // });
        };
    };

    return (
        <div>
            <div class="hsection">
                <h2>Editar Usuários</h2>
            </div>
            <div className="">
                <form onSubmit={enviarAlteracao}>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        disabled
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                    <button type='submit' className='buttonVoltar' onClick={() => mudarTela('/')}>Voltar</button>
                </form>
            </div>
        </div>
    )
}