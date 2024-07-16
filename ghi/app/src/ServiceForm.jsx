import React, { useEffect, useState } from 'react';


function ServiceForm(){
    const [techs, setTechs] = useState([])
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        reason: "",
        status:"in progress",
        vin: "",
        customer: "",
        technician: "",
    })
    const URL = "http://localhost:8080/api/technicians/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if (response.ok){
            const data = await response.json()
            setTechs(data.technicians)
        }
    }
    useEffect(() => {
        fetchData();
      }, []);

    const handleFormChange = (e) => {
        const value = e.target.value
        const inputName = e.target.name
        setFormData({...formData,[inputName]: value},)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)
        const postUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(postUrl, fetchConfig)
        if (response.ok){
            setFormData({
                date: "",
                time: "",
                reason: "",
                vin: "",
                customer: "",
                technician: "",
            })
            window.location.href = "http://localhost:5173/appointments/"
        } else {
            alert("Something went wrong")
        }
    }


    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="vin" required type="text" name="vin"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="customer" required type="text" name="customer"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="date" required type="date" name="date"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="time" required type="time" step="1" name="time"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Time</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required name="technician" id="technician" className="form-select">
                                <option value="">Choose a Technician</option>
                                {techs.map(tech => {
                                return (
                                    <option key={tech.id} value={tech.employee_id}>{tech.first_name} {tech.last_name}</option>
                                )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="reason" required type="text" name="reason"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Reason</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ServiceForm
