import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InsertarLote() {
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

  
    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = {};
        
        if (!formData.num_lote) {
            validationErrors.num_lote = "Número de lote es requerido";
        }
        
        if (!formData.nombre_responsable) {
            validationErrors.nombre_responsable = "Nombre del responsable es requerido";
        }

        if (!formData.apellido_responsable) {
            validationErrors.apellido_responsable = "Apellido del responsable es requerido";
        }

        if (!formData.fecha_inicio) {
            validationErrors.fecha_inicio = "Fecha de inicio es requerida";
        }

        if (!formData.fecha_terminacion) {
            validationErrors.fecha_terminacion = "Fecha de terminación es requerida";
        }

        if (!formData.tipo_piezas) {
            validationErrors.tipo_piezas = "Tipo de piezas es requerido";
        }

        if (!formData.no_piezas) {
            validationErrors.no_piezas = "Número de piezas es requerido";
        }

        if (!formData.no_piezas_defectuosas) {
            validationErrors.no_piezas_defectuosas = "Número de piezas defectuosas es requerido";
        }
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8081/insertar-produccion', formData);
            console.log(response.data);

            if (response.data.status === 'Correcto') {
                navigate('/dashboard/produccion');
            }
        } catch (error) {
            console.error(error);
            // Manejo de errores
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: ""
            }));
        }
    };

    return (
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Añadir Producción</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label className="form-label">Número de Lote</label>
                    <input type="text" className="form-control" name="num_lote" value={formData.num_lote} onChange={handleChange} required />
                </div>
                <div className="col-12">
                <label className="form-label">Nombre del Responsable</label>
                <input type="text" className="form-control" name="nombre_responsable" value={formData.nombre_responsable} onChange={handleChange} required />
                </div>
                <div className="col-12">
                <label className="form-label">Apellido del Responsable</label>
                  <input type="text" className="form-control" name="apellido_responsable" value={formData.apellido_responsable} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Fecha de Inicio</label>
                    <input type="datetime-local" className="form-control" name="fecha_inicio" value={formData.fecha_inicio} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Fecha de Terminación</label>
                    <input type="datetime-local" className="form-control" name="fecha_terminacion" value={formData.fecha_terminacion} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Tipo de Piezas</label>
                    <input type="text" className="form-control" name="tipo_piezas" value={formData.tipo_piezas} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Número de Piezas</label>
                    <input type="text" className="form-control" name="no_piezas" value={formData.no_piezas} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Número de Piezas Defectuosas</label>
                    <input type="text" className="form-control" name="no_piezas_defectuosas" value={formData.no_piezas_defectuosas} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Insertar en Producción</button>
                </div>
            </form>
        </div>
    );
}

export default InsertarLote;
