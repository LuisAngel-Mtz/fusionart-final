import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditarProduccion() {
    const [formData, setFormData] = useState({
        num_lote: '',
        nombre_responsable: '',
        apellido_responsable: '',
        fecha_inicio: '',
        fecha_terminacion: '',
        tipo_piezas: '',
        no_piezas: '',
        no_piezas_defectuosas: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/getProd/${id}`)
            .then(res => {
                const lote = res.data.Result[0];
                setFormData({
                    num_lote: lote.num_lote,
                    nombre_responsable: lote.nombre_responsable,
                    apellido_responsable: lote.apellido_responsable,
                    fecha_inicio: lote.fecha_inicio,
                    fecha_terminacion: lote.fecha_terminacion,
                    tipo_piezas: lote.tipo_piezas,
                    no_piezas: lote.no_piezas,
                    no_piezas_defectuosas: lote.no_piezas_defectuosas
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8081/actualizarProduccion/${id}`, formData);
            if (response.data.Status === 'Correcto') {
                navigate('/dashboard/produccion');
            }
        } catch (error) {
            console.error(error);
            // Manejo de errores
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Editar Producción</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label className="form-label">Número de Lote</label>
                    <input type="text" className="form-control" name="num_lote" placeholder="Ingrese número de lote" autoComplete="off"
                        onChange={handleChange} value={formData.num_lote} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Nombre del Responsable</label>
                    <input type="text" className="form-control" name="nombre_responsable" placeholder="Ingrese nombre del responsable" autoComplete="off"
                        onChange={handleChange} value={formData.nombre_responsable} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Apellido del Responsable</label>
                    <input type="text" className="form-control" name="apellido_responsable" placeholder="Ingrese apellido del responsable" autoComplete="off"
                        onChange={handleChange} value={formData.apellido_responsable} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Fecha de Inicio</label>
                    <input type="datetime-local" className="form-control" name="fecha_inicio" onChange={handleChange} value={formData.fecha_inicio} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Fecha de Terminación</label>
                    <input type="datetime-local" className="form-control" name="fecha_terminacion" onChange={handleChange} value={formData.fecha_terminacion} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Tipo de Piezas</label>
                    <input type="text" className="form-control" name="tipo_piezas" placeholder="Ingrese tipo de piezas" autoComplete="off"
                        onChange={handleChange} value={formData.tipo_piezas} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Número de Piezas</label>
                    <input type="text" className="form-control" name="no_piezas" placeholder="Ingrese número de piezas" autoComplete="off"
                        onChange={handleChange} value={formData.no_piezas} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Número de Piezas Defectuosas</label>
                    <input type="text" className="form-control" name="no_piezas_defectuosas" placeholder="Ingrese número de piezas defectuosas" autoComplete="off"
                        onChange={handleChange} value={formData.no_piezas_defectuosas} required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Actualizar Producción</button>
                </div>
            </form>
        </div>
    );
}

export default EditarProduccion;
