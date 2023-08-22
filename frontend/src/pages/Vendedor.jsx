import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import axios from 'axios'
import "../styles/style.css"

function Vendedor() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/obtenervendedor')
      .then(res => {
        if (res.data.Status === 'Correcto') {
          setData(res.data.Result);
        } else {
          alert('error')
        }
      })
      .catch((err => console.log(err)))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/eliminarvendedor/'+id)
    .then(res => { 
      if (res.data.Status === 'Correcto') {
        window.location.reload(true);
      } else {
        alert('error')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Lista de vendedores</h3>
      </div>
      <Link to='/insertarvendedor' className='btn btn-success'>Añadir vendedor</Link>

      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>email</th>
              <th>address</th>
              <th>salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vendedor, index) => {
              return <tr key={index}>
                <td>{vendedor.name}</td>
                <td>{
                  <img src={`http://localhost:8081/img/` + vendedor.image} alt="" className='vendedor_img' />
                }</td>
                <td>{vendedor.email}</td>
                <td>{vendedor.address}</td>
                <td>{vendedor.salary}</td>
                <td>
                  <Link to={`/dashboard/editarVendedor/` + vendedor.id} className='btn btn-sm btn-primary me-2'>edit</Link>
                  <button onClick={e => handleDelete(vendedor.id)} className='btn btn-sm btn-danger'>delete</button>
                </td>

              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Vendedor