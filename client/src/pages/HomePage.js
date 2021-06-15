
import React, { useContext } from 'react'
import { BandList } from '../components/BandList';
import { BandAdd } from '../components/BandAdd';
import { SocketContext } from '../context/SoketContext';

export const HomePage = () => {

  const { online } = useContext(SocketContext);

  // const [bands, setBands] = useState([]);
  // const { socket, online } = useSocket('http://localhost:8080');


  // useEffect(() => {
  //   socket.on('current-bands', (bands) => {
  //     setBands(bands);
  //   })
  // }, [socket])

  // const votar = (id) => {
  //   socket.emit('votar-banda', id);
  // }

  // const borrar = (id) => {
  //   socket.emit('borrar-banda', id);
  // }

  // const cambiarNombre = (id, nombre) => {
  //   socket.emit('cambiar-nombre-banda', { id, nombre });
  // }

  return (
    <div className="container">

      <div className="alert">
        <p>
          Service status:
          {
            online
              ? <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }

        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>


    </div>
  )
}