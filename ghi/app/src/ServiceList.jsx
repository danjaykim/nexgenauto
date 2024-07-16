import React, { useEffect, useState } from 'react';

function ServiceList(){
    const [apps, setApps] = useState([])
    const [autos, setAutos] = useState([])
    const URL = "http://localhost:8080/api/appointments/"
    const autoURL = "http://localhost:8080/api/automobiles/"
    const autoVINs = []
    const fetchData = async () => {
        const response = await fetch(URL)
        const autoresponse = await fetch(autoURL)
        if (response.ok){
            const data = await response.json()
            const autodata = await autoresponse.json()
            setApps(data.appointments)
            const automobiles = autodata.automobiles
            for (let automobile of automobiles){
                autoVINs.push(automobile.vin)
            }
            setAutos(autoVINs)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(apps === null){
        return (
            <div>Loading Appointment List</div>
        )
    }
    const handleCancel = async(id) => {
        // event.preventDefault()
        const finishURL = `http://localhost:8080/api/appointments/${id}/cancel/`
        const fetchConfig = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(finishURL, fetchConfig)
        window.location.href = "http://localhost:5173/appointments/"
    }
    const handleFinish = async(id) => {
        // event.preventDefault()
        const finishURL = `http://localhost:8080/api/appointments/${id}/finish/`
        const fetchConfig = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(finishURL, fetchConfig)
        window.location.href = "http://localhost:5173/appointments/"
    }
    if(autos === null)
        return(
            <div>Loading Automobiles</div>
    )
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Service Appointments</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time(24HR)</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>cancel</th>
                    <th>finish</th>
                    </tr>
                </thead>
                <tbody>
                    {apps.map(app => {
                        if (app.status === "in progress"){
                            let vip = "No"
                            if (autos.includes(app.vin)){
                                vip = "Yes"
                            }
                            if (app.vin )
                        return (
                            <tr key={app.id}>
                            <td>{ app.vin }</td>
                            <td>{ vip }</td>
                            <td>{ app.customer }</td>
                            <td>{ app.date }</td>
                            <td>{ app.time }</td>
                            <td>{ app.technician.first_name } { app.technician.last_name}</td>
                            <td>{ app.reason }</td>
                            <td><button onClick={() => handleCancel(app.id)}>Cancel</button></td>
                            <td><button onClick={() => handleFinish(app.id)}>Finish</button></td>
                            </tr>
                        )}
                    })}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default ServiceList
