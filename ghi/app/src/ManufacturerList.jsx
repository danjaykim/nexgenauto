import React, { useEffect, useState } from 'react';

function ManufacturerList(){
    const [manus, setManus] = useState([])
    const URL = "http://localhost:8100/api/manufacturers/"
    const fetchData = async () => {
        const response = await fetch(URL)
        if(response.ok){
            const data = await response.json()
            setManus(data.manufacturers)
            console.log(manus)
        }
    }
    useEffect(() => {fetchData()}, [])
    if(manus === null){
        return <div>Loading</div>
    }
    return (
        <>
            <div>
                <h1 className="display-5 fw-bold">Manufacturers</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manus.map(manu => {
                    return (
                        <tr key={manu.id}>
                        <td>{ manu.name }</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default ManufacturerList
