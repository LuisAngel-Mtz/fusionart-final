import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function InsertarVendedor() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        image: ''
    })

    const navigate = useNavigate();
    const HandleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name)
        formdata.append("email", data.email)
        formdata.append("address", data.address)
        formdata.append("password", data.password)
        formdata.append("salary", data.salary)
        formdata.append("image", data.image)
        axios.post('http://localhost:8081/insertar', formdata)
            .then(res => {
                if(res.data.Status === 'Correcto'){ 
                    navigate("/dashboard/vendedor")
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Añadir Vendedor</h2>
            <form className="row g-3 w-50" onSubmit={HandleSubmit}>
                <div className="col-12">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter name" autoComplete="off"
                        onChange={e => setData({ ...data, name: e.target.value })} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email" autoComplete="off"
                        onChange={e => setData({ ...data, email: e.target.value })} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Password"
                        onChange={e => setData({ ...data, password: e.target.value })} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control" id="inputSalary" placeholder="Enter Salary"
                        onChange={e => setData({ ...data, salary: e.target.value })} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete="off"
                        onChange={e => setData({ ...data, address: e.target.value })} required/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label" >Select Image</label>
                    <input type="file" className="form-control" id="inputGroupFile01"
                        onChange={e => setData({ ...data, image: e.target.files[0] })} required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Insertar</button>
                </div>
            </form>
        </div>
    )
}

export default InsertarVendedor