/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contactanos</b></h2>
          <div className='mb-3'><p><b>Dirección:</b> 123 calle rayon, Familia Nevarez Vela</p> </div>
          <div className='mb-3'><p><b>Número de celular:</b>  <a className='footer-tel' href="tel:+526183031955">Llamanos a: +52 (618) 303-1955</a></p> </div>
          <div className='mb-4'><p><b>Horas:</b> De 8 a.m a 6 p.m</p> </div>
          <div className='mb-3'><p><b>Siguenos en nuestras redes sociales:</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to='#' id='footer-link' target='_blank' className='gap-3'>
          <BsDiscord />
          </Link>
          <Link to='#' id='footer-link' target='_blank' className='gap-3'>
          <BsTwitter />
          </Link>
          <Link className='gap-3' id='footer-link'>
          <BsFacebook />
          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Acerca de:</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>Nosotros</Link>  </div>
          <div className='mb-3'> <Link to='checkout' id='footer-links'>Entrega</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Política de privacidad</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terminos y condiciones</Link>  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Cuenta</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Perfiles</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>Carrito</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Ayuda</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Pagos</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Mi lista</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Cupones</Link> </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Instalar aplicaciones</b></h2>
          <p className='mb-3'>Disponible en Google Play Services y App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
          <p className="mb-3">
           Otros metodos de pago:
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
        <p className="text-center text-md-start">&copy;BALZ-TECH Y FUSIONART</p>
        </div>
        <div className="col-12 col-md-6">
        <ul className="list-inline text-center text-md-end">
          <li className="list-inline-item"><Link to="#" className="text-dark">Política de privacidad</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Términos de uso </Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Contáctenos</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer