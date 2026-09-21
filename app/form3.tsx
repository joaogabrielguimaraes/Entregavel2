'use client';

import { useState } from 'react';

export default function FormularioEnviar() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState(false);

    return (
        <div style={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20vw',
            height: '20vh',
        }}>
            <form onSubmit={ (evento) => {
                evento.preventDefault();

                if (nome.length < 2) {
                    setMensagem('O nome precisa ter pelo menos 2 caracteres');
                    setSucesso(false);
                } else if (nome.length > 20) {
                    setMensagem('O nome precisa ter até 20 caracteres');
                    setSucesso(false);
                } else {
                    setMensagem('Formulário enviado com sucesso');
                    setSucesso(true);
                }
            }}>
                <div>
                    <label htmlFor="nome">Nome:</label>

                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite seu nome..."
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                    />

                    <br />

                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'red',
                            width: '100%',
                        }}
                    >
                        Enviar
                    </button>

                    {mensagem && (
                        <p style={{
                            color: sucesso ? 'green' : 'red'
                        }}>
                            {mensagem}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}