/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';


const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3'>CONTENIDO EXCLUSIVO</p>
                  <h1>OFERTAS GRAN VALOR</h1>
                  <h2>En todos los productos</h2>

                  <p className='mb-3'>Ahorre más hoy con FusionArt</p>

                  <Link to='/shop' className='btn btn-primary' id='button-link'>Comprar Ahora</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <Hero />

  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Productos Destacados</h1>
          <h3>Encontraras muchos diseños</h3>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>

  <section className="repair-services p-5">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white'>Encontraras bastantes productos</h5>
          <h2 className='mb-3 text-white'>Desde tenis hasta ropa y todo exclusivo</h2>
          <button>Explorar Ahora</button>
        </div>
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>Nuevas Tendencias</h1>
          <p>Se parte de nosotros y diseña tú propia ropa exclusiva </p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Las mejores ofertas</h5>
                  <h2 className="card-text mb-2">Compre uno y llévese otro gratis</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">La última mejor colección en nuestro armario <br />Siéntete Lind@ con nuestros outfits</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Leer más</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Temporadas</h5>
                  <h2 className="card-text mb-2">Atuendo para todo clima</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">No importa en qué estación sea <br />nosotros te cubrimos con nuestra ropa</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Leer más</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3">Lo que dicen nuestras clientes...</h1>
        <p className="mb-4">Nuestros clientes nunca se pierden un momento al proporcionar comentarios.</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog1} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">FusionArt tiene un excelente contenido de playeras y pans todo es exlusivo. ¡Esta impresionante!.</p>
            <Link to='about'>
            <button className="mt-4">Leer más</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog2} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text"> El diseño exclusivo y creativo refleja el talento del artista y me hace sentir como si estuviera usando una pieza única.</p>
            <Link to='about'>
            <button className="mt-4">Leer más</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog3} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Me permite expresar mi propio estilo y personalidad. Además, el material es suave y cálido, perfecto para los días más fríos. </p>
            <Link to='about'>
            <button className="mt-4">Leer más</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog4} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">¡Estos tenis son una combinación perfecta de estilo y originalidad! los convierte en el calzado ideal tanto para el día a día como para ocasiones epeciales.</p>
            <Link to='about'>
            <button className="mt-4">Leer más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <Newsletter />
  </>;
}

export default home