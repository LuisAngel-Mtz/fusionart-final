import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Home2() {
  const [adminCount, setAdminCount] = useState(0); // Establece un valor inicial para evitar problemas de renderizado inicial
  const [vendedorCount, setVendedorCount] = useState(0);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8081/adminCount')
      .then(res => {
        setAdminCount(res.data[0].admin);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8081/vendedorCount')
      .then(res => {
        setVendedorCount(res.data[0].vendedor);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8081/salary')
      .then(res => {
        setSalary(res.data[0].sumOfSalary);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='p-3 border shadow-sm w-25'>
          <p>Admin</p>
          <hr />
          <p>Total: {adminCount}</p>
        </div>
        <div className='p-3 border shadow-sm w-25'>
          <p>Vendedor</p>
          <hr />
          <p>Total: {vendedorCount}</p>
        </div>
        <div className='p-3 border shadow-sm w-25'>
          <p>Salary</p>
          <hr />
          <p>Total: {salary}</p>
        </div>
      </div>

      {/* Lista de Admin */}
      <div className='mt-4 px-5 pt-3'>
        <h3>Lista de vendedores</h3>
        <table className='table mt-4 shadow-sm'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin</td>
              <td>admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home2;