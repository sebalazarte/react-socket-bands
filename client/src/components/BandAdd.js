import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SoketContext';

export const BandAdd = () => {

    const [valor, setValor] = useState('');
    const {socket} = useContext(SocketContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (valor.trim().length > 0) {

            socket.emit('nueva-banda', { nombre: valor });
            setValor('');
        }
    }

    return (
        <>
            <h3>Agregar banda</h3>

            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    placeholder="nombre"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />

            </form>
        </>
    )
}
