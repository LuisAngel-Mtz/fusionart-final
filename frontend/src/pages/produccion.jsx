import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from "react-bootstrap/Button";

function Produccion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/obtenerproduccion')
      .then(res => {
        if (res.data.Status === 'Correcto') {
          setData(res.data.Result);
        } else {
          alert('error');
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/eliminarproduccion/${id}`)
      .then(res => {
        if (res.data.Status === 'Correcto') {
          // Recargamos la página para reflejar los cambios después de eliminar el lote de producción
          window.location.reload(true);
        } else {
          alert('error');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Lista de lotes de producción</h3>
      </div>
      <Link to='/insertarLote' className='btn btn-success'>Añadir lote</Link>

      <div className='mt-3'>
      <table className='table'>
    <thead>
      <tr>
        <th>Número de Lote</th>
        <th>Nombre del Responsable</th>
        <th>Apellido del Responsable</th>
        <th>Fecha de Inicio</th>
        <th>Fecha de Terminación</th>
        <th>Tipo de Piezas</th>
        <th>Número de Piezas</th>
        <th>Número de Piezas Defectuosas</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((lote, index) => (
        <tr key={index}>
          <td>{lote.num_lote}</td>
          <td>{lote.nombre_responsable}</td>
          <td>{lote.apellido_responsable}</td>
          <td>{lote.fecha_inicio}</td>
          <td>{lote.fecha_terminacion}</td>
          <td>{lote.tipo_piezas}</td>
          <td>{lote.no_piezas}</td>
          <td>{lote.no_piezas_defectuosas}</td>
          <td>
            <button onClick={() => handleDelete(lote.id)} className='btn btn-sm btn-danger'>delete</button>
          </td>
          <td>
          <Link to={`/dashboard/editarProduccion/${lote.id}`} className='btn btn-sm btn-primary me-2'>Editar</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>
    </div>
  );
}

export default Produccion;
