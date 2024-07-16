import React, { useEffect, useState } from 'react';


function ServiceForm(){
    const [techs, setTechs] = useState([])
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        reason: "",
        status: "",
        vin: "",
        customer: "",
        technician: "",
        date_time: "",
    })
    const URL = "http://localhost:8080/api/technicians/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if (response.ok){
            const data = await response.json()
            setTechs(data.technicians)
        }
    }


    const handleFormChange = (e) => {
        const value = e.target.value
        const inputName = e.target.name
        setFormData({...formData,[inputName]: value},)
        // setFormData({...formData, date_time: `${formData.date}T${formdata.time}:00+00:00`})
    //     if(inputName === "date")
    //     setFormData({...formData, date_time: `${}T${}:00+00:00`})
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const postUrl = "http://localhost:8080/api/technicians/";
        // const fetchConfig = {
        //     method: "post",
        //     body: JSON.stringify(formData),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // }
        // console.log(formData.date_time)
        // const response = await fetch(postUrl, fetchConfig)
        // if (response.ok){
        //     setFormData({
        //         date: "",
        //         time: "",
        //         reason: "",
        //         status: "",
        //         vin: "",
        //         customer: "",
        //         technician: "",
        //         date_time: "",
        //     })
            // window.location.href = "http://localhost:5173/technicians/"
        // } else {
        //     alert("Invalid Employee ID")
        // }
    }


    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="vin" required type="text" name="VIN"
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
                            <input onChange={handleFormChange} placeholder="time" required type="time" name="time"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="technician" required type="text" name="technician"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Technician</label>
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
