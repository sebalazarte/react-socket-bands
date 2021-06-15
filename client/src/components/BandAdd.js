import React, { useState } from 'react'

export const BandAdd = ({ crearBanda}) => {

    const [valor, setValor] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(valor.trim().length > 0){

            crearBanda(valor);
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
