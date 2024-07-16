import React, { useEffect, useState } from 'react';

function AutoList(){
    const [autos, setAutos] = useState([])
    const URL = "http://localhost:8100/api/automobiles/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if(response.ok){
            const data = await response.json()
            setAutos(data.autos)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(autos === null){
        return <div>Loading</div>
    }
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Automobiles</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(auto => {
                        if(auto.sold){
                            return (
                                <tr key={auto.id}>
                                    <td>{ auto.vin }</td>
                                    <td>{ auto.color }</td>
                                    <td>{ auto.year }</td>
                                    <td>{ auto.model.name }</td>
                                    <td>{ auto.model.manufacturer.name }</td>
                                    <td>Yes</td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={auto.id}>
                                    <td>{ auto.vin }</td>
                                    <td>{ auto.color }</td>
                                    <td>{ auto.year }</td>
                                    <td>{ auto.model.name }</td>
                                    <td>{ auto.model.manufacturer.name }</td>
                                    <td>No</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default AutoList
