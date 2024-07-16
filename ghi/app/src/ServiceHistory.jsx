import React, { useEffect, useState } from 'react';

function ServiceHistory(){
    const [search, setSearch] = useState("")
    const [apps, setApps] = useState([])
    const [autos, setAutos] = useState([])
    let searchTerm = ""
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

    const searchHandler = (e) => {
        let upper = e.target.value.toUpperCase()
        setSearch(upper)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const filtered = []
        searchTerm = search
        for (let app of apps){
            if(app.vin === searchTerm){
                filtered.push(app)
            }
        }
        setSearch("")
        setApps(filtered)
    }

    if(apps === null){
        return (
            <div>Loading Appointment List</div>
        )
    }
    if(autos === null)
        return(
            <div>Loading Automobiles</div>
    )
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Service Appointments</h1>
                <form onSubmit={handleSubmit} id="searchBar" className="d-flex">
                    <input onChange={searchHandler} placeholder="Search By VIN" required type="text" name="vin"
                        id="searchbar" className="form-control" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
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
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {apps.map(app => {
                        if (app.status !== "in progress"){
                            let vip = "No"
                            if (autos.includes(app.vin)){
                                vip = "Yes"
                            }
                        return (
                            <tr key={app.id}>
                            <td>{ app.vin }</td>
                            <td>{ vip }</td>
                            <td>{ app.customer }</td>
                            <td>{ app.date }</td>
                            <td>{ app.time }</td>
                            <td>{ app.technician.first_name } { app.technician.last_name}</td>
                            <td>{ app.reason }</td>
                            <td>{ app.status }</td>
                            </tr>
                        )}
                    }
                    )}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default ServiceHistory
