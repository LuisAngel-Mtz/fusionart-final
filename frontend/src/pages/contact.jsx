/* eslint-disable no-unused-vars */
import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Encuentranos</h1>
            <p className=' text fs-3'>Puedes contactarnos en cualquier momento</p>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="map card m-auto embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.413177946199!2d-104.66947081934471!3d24.01649082302704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc81c78761c97%3A0xdda1cf1b2e2130aa!2sRayon%20200%2C%20Cantarranas%2C%20Barrio%20de%20Tierra%20Blanca%2C%2034139%20Durango%2C%20Dgo.!5e0!3m2!1sen!2smx!4v1688976740200!5m2!1sen!2smx"
             allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contactanos</b></h2>
                  <p className='mb-2'><b>Direccion:</b> 123 calle rayon, Familia Nevarez Vela</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="tel:+526183031955">Llamanos a: +52 (618) 303-1955</a></p>
                  <p className='mb-4'><b>Horas:</b> De 8 a.m a 6 p.m</p>
                  <p>Un grupo de amigos apasionados por la moda y el diseño. Cada uno de ellos tenía su propio talento y habilidades únicas, pero compartían una visión común: crear una plataforma que fusionara el arte y la moda de una manera innovadora y auténtica. Así nació Fusion Art.</p>
                  <p>Fusion Art comenzó como una tienda online, donde presentaron sus primeras colecciones de ropa y tenis diseñados por artistas destacados. La respuesta fue abrumadora. Los amantes del arte y la moda se sintieron atraídos por la singularidad y la autenticidad de las piezas. </p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Dejanos un mensaje</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Tú mensaje</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit">Enviar</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact