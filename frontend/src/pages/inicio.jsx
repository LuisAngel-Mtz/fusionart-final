import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/inicio.css'; // Importamos el archivo CSS con minúsculas


const Inicio = () => {
  const navigate = useNavigate();

  const handleVendedorClick = () => {
    navigate('/VendedorLog');
  };

  const handleAdminClick = () => {
    navigate('/login2');
  };

  return (
    <div className="flex_container"> {/* Agregamos la clase flex_container */}
      <div className="inicio_card"> {/* Mantenemos la clase inicio_card */}
        <h1 className="inicio_login_title">Login</h1> {/* Agregamos la clase inicio_login_title */}
        <div className="inicio_message">
          {/* Aquí puedes agregar algún mensaje informativo si es necesario */}
        </div>
        <div className="inicio_actions">
          <div className="user-box">
            <button className="inicio_btn btn-primary btn-lg noise_btn" onClick={handleVendedorClick}>
              Vendedor
            </button>
          </div>
          <div className="user-box">
            <button className="inicio_btn btn-success btn-lg noise_btn" onClick={handleAdminClick}>
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
