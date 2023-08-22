import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/style.css';

function VendedorInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vendedor, setVendedor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/get/' + id)
      .then(res => setVendedor(res.data.Result[0]))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:8081/logout')
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <img src={`http://localhost:8081/img/` + vendedor.image} alt="" className='editimg' />
        <div className='d-flex align-items-center flex-column mt-5'>
          <h3>Name: {vendedor.name}</h3>
          <h3>Email: {vendedor.email}</h3>
          <h3>Salary: {vendedor.salary}</h3>
        </div>
        <div>
          <button className='btn btn-danger btn-lg' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default VendedorInfo;
