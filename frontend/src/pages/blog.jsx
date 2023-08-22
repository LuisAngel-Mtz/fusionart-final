/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/b1.jpg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">BLOG</h1>
            <p className='text-white fs-3'>Enterate de todo en el momento...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>El blog del momento:</h1>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Marvel Clein</h5>
                <p className="card-text">Desde que Marvel Clein comenzó a usar nuestra ropa, ha recibido numerosos cumplidos por su estilo único y auténtico. Nuestras prendas de alta calidad y nivel creativo excepcional han capturado la atención de todos aquellos que lo rodean. <br /> </p>
                <p className="card-text"><small className="text-body-secondary">Hace 1 hora</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">Las gemelas, siempre a la vanguardia de las tendencias de moda, encontraron en nuestra selección de diseños exclusivos y limitados una forma de destacar y expresar su individualidad. Nuestras prendas de alta calidad y nivel creativo único se han convertido en piezas clave en sus estilismos diarios. <br />. </p>
                      <p className="card-text"><small className="text-body-secondary">Ahora Mismo</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">FusionArt</h5>
                      <p className="card-text">¡La espera ha terminado! Estamos emocionados de anunciar que FusionArt buscara abrir su primera sucursal física para brindar a nuestros clientes una experiencia de compra aún más completa. <br />. </p>
                      <p className="card-text"><small className="text-body-secondary">Ahora Mismo</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Belinda</h5>
                      <p className="card-text">¡Noticias emocionantes! Estamos encantados de anunciar que Belinda, reconocida artista y fashion icon, ha decidido cerrar un contrato con Fusion Art para colaborar y lanzar su línea exclusiva de ropa. <br />.</p>
                      <p className="card-text"><small className="text-body-secondary">Ahora Mismo</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog