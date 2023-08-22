import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/VendedorLog.css';

function VendedorLog() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8081/logvendedor', values);
      if (res.data.Status === 'Correcto') {
        const id = res.data.id;
        navigate('/vendedorInfo/' + id);
      } else {
        toast.error(res.data.Error);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className="centered-form-container">
      <div className="form-container">
        <div className="logo-container">
          <h1>¡BIENVENIDO VENDEDOR!</h1>
        </div>

        <div className="social-buttons">
          <button className="social-button facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
            </svg>
            <span>Registrate con Facebook</span>
          </button>
        </div>
        <div className="line"></div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              required
              placeholder="Entra con tu email"
              name="email"
              id="email"
              type="text"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              required
              name="password"
              placeholder="Entra con tu contraseña"
              id="password"
              type="password"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>

          <button type="submit" className="form-submit-btn">Sign In</button>
        </form>

        <a className="forgot-password-link link" href="#">Forgot Password</a>

        <p className="signup-link">
          Don't have an account?
          <a className="signup-link link" href="#"> Sign up now</a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
}

export default VendedorLog;
