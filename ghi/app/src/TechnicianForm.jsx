import React, { useEffect, useState } from 'react';

function TechnicianForm(){
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
      })


      const handleFormChange = (e) => {
        const value = e.target.value
        const inputName = e.target.name
        setFormData({...formData,[inputName]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const postUrl = "http://localhost:8080/api/technicians/";

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
                first_name: '',
                last_name: '',
                employee_id: '',
            })
            window.location.href = "http://localhost:5173/technicians/"
        } else {
            alert("Invalid Employee ID")
        }


    }


    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Technician</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="first_name" required type="text" name="first_name"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="last_name" required type="text" name="last_name"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="employee_id" required type="text" name="employee_id"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Employee ID</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TechnicianForm
