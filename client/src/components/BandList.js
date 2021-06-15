import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SoketContext';

export const BandList = () => {

    const [bands, setBands] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands);
        });
        return () => socket.off('current-bands');
    }, [socket])


    const cambioNombre = (event, id) => {
        const nuevoNombre = event.target.value;
        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = nuevoNombre;
            }

            return band;
        }))
    }

    const onPerdioFoco = (id, nombre) => {
        socket.emit('cambiar-nombre-banda', { id, nombre });
    }

    const votar = (id) => {
        socket.emit('votar-banda', id);
    }

    const borrar = (id) => {
        socket.emit('borrar-banda', id);
    }

    const crearRows = () => {
        return (
            bands.map(({ id, name, votes }) => (

                <tr key={id}>
                    <td>
                        <button
                            onClick={() => votar(id)}
                            className="btn btn-primary"
                        >+1</button>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={name}
                            onChange={(event) => cambioNombre(event, id)}
                            onBlur={() => onPerdioFoco(id, name)}
                        />
                    </td>
                    <td><h3>{votes}</h3></td>
                    <td>
                        <button
                            onClick={() => borrar(id)}
                            className="btn btn-danger">
                            Borrar
                        </button>
                    </td>
                </tr>
            ))

        );
    }

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {crearRows()}
                </tbody>
            </table>
        </>
    )
}
