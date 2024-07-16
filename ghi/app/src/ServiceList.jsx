import React, { useEffect, useState } from 'react';

function ServiceList(){
    const [apps, setApps] = useState([])
    const URL = "http://localhost:8080/api/appointments/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            setApps(data.appointments)
            console.log(apps)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(apps === null){
        return (
            <div>Loading Appointment List</div>
        )
    }
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
                            let date = app.date_time.slice(0,10)
                            let time = app.date_time.slice(11,19)
                        return (
                            <tr key={app.id}>
                            <td>{ app.vin }</td>
                            <td>No</td>
                            <td>{ app.customer }</td>
                            <td>{ date }</td>
                            <td>{ time }</td>
                            <td>{ app.technician.first_name } { app.technician.last_name}</td>
                            <td>{ app.reason }</td>
                            <td>cancel</td>
                            <td>finish</td>
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
