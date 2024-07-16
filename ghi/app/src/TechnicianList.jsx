import React, { useEffect, useState } from 'react';


function TechnicianList(){
    const [techs, setTechs] = useState([])
    const URL = "http://localhost:8080/api/technicians/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if (response.ok){
            const data = await response.json()
            // console.log(data)
            setTechs(data.technicians)
            // console.log(techs)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(techs === null){
        return (
            <div>Loading Technician List</div>
        )
    }
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Technicians</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {techs.map(tech => {
                    return (
                        <tr key={tech.id}>
                        <td>{ tech.employee_id }</td>
                        <td>{ tech.first_name }</td>
                        <td>{ tech.last_name }</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
        </>
    )

}

export default TechnicianList
