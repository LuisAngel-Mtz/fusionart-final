import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditarVendedor() {

    const [data, setData] = useState({
        name: '',
        email: '',
        salary: '',
        address: '',
    })

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/get/' + id)
            .then(res => { 
                setData({...data, name:res.data.Result[0].name, 
                        email:res.data.Result[0].email,
                        address:res.data.Result[0].address,
                        salary:res.data.Result[0].salary,
                })
            })
            .catch(err => console.log(err))
    }, [])

    const HandleSubmit = (event) => {
        event.preventDefault();
        console.log('entro')
        axios.put('http://localhost:8081/actualizar/'+id,data)
            .then(res => {
                console.log(res.data.Status)
                if(res.data.Status === 'Correcto'){ 
                    navigate("/dashboard/vendedor")
                }
            })
            .catch(err => console.log(err));

    }


    return (
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Update vendedor</h2>
            <form className="row g-3 w-50" onSubmit={HandleSubmit}>
                <div className="col-12">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter name" autoComplete="off"
                        onChange={e => setData({ ...data, name: e.target.value })} value={data.name} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email" autoComplete="off"
                        onChange={e => setData({ ...data, email: e.target.value })} value={data.email} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control" id="inputSalary" placeholder="Enter Salary"
                        onChange={e => setData({ ...data, salary: e.target.value })} value={data.salary} required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete="off"
                        onChange={e => setData({ ...data, address: e.target.value })} value={data.address} required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditarVendedor