/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const newsletter = () => {
  return <>
  <section className="news-letter p-5">
    <div className="container-xxl">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center">
            <h2 className='mb-3'>Regístrese para recibir todas nuestras notificaciones</h2>
            <h5>Reciba actualizaciones por correo electrónico sobre <Link>nuestras ofertas</Link></h5>
          </div>
        </div>
        <div className="col-md-6 details d-flex flex-column justify-content-center">
          <div className="input-group mb-3">
            <input type="text" id='news-input' className="form-control" placeholder="ejemplo@gmail.com" aria-label="@example.com" aria-describedby="basic-addon2" />
            <button className="input-group-text" id="basic-addon2">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>;
}

export default newsletter