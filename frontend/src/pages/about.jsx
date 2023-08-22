/* eslint-disable no-unused-vars */
import React from 'react'
import a6 from '../assets/images/about/a6.jpg'


const about = () => {
  return <>
  <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">CONOCENOS</h1>
            <p className='text-white fs-3'>Aprende más de nosotros</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us p-5">
    <div className="row">
      <div className="col-md-6">
        <img src={a6} alt="" className='img-fluid p-5' />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1><b>¿Quienes Somos?</b></h1>
        <p className="card-text mb-3">¡Bienvenidos a nuestra tienda online de ropa y tenis únicos! En FusionArt, nos apasiona fusionar el arte y la moda para brindarte una experiencia de compra verdaderamente excepcional. </p>
        <p className="card-text">Somos una tienda que se distingue por nuestra colaboración con talentosos artistas locales e internacionales, quienes son los creadores detrás de cada diseño exclusivo y limitado que ofrecemos. <br /> </p>
      </div>
    </div>
  </section>


  </>;
}

export default about