'use client';
import { useState } from 'react';

export default function Frutas() {
    const [escolha, setEscolha] = useState('');

    return (
        <div style={{
            backgroundColor: '#190303',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            height: '50%',
            position: 'relative',
        }}>
            <select
                value={escolha}
                onChange={(e) => setEscolha(e.target.value)}
                style = {{
                    backgroundColor: '#160303',
                    border: '1px solid #adadad',
                    borderRadius: '4px',
                    position: 'absolute',
                    top: '10px',
                }}
            >
                <option value="">Escolha uma fruta</option>
                <option value="banana">Banana</option>
                <option value="maca">Maçã</option>
                <option value="laranja">Laranja</option>
                <option value="uva">Uva</option>
            </select>

            <p style={{ position: 'absolute', bottom: '10px', color: 'white' }}>Fruta escolhida: {escolha}</p>
        </div>
    );
}