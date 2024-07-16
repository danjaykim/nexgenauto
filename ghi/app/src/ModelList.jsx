import React, { useEffect, useState } from 'react';

function ModelList(){
    const [models, setModels] = useState([])
    const URL = "http://localhost:8100/api/models/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if(response.ok){
            const data = await response.json()
            setModels(data.models)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(models === null){
        return <div>Loading</div>
    }
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Models</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                    return (
                        <tr key={model.id}>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name}</td>
                        <td><img src={ model.picture_url } width="200" height="100"/></td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default ModelList
