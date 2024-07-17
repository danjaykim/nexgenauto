import { useEffect, useState } from 'react';

export default function AutoList() {

    // States:

    const [autos, setAutos] = useState([]);

    // =============================================

    // Fetch automobile data:

    const fetchData = async () => {
        const URL = "http://localhost:8100/api/automobiles/";
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
        }
    }
    useEffect(() => { fetchData() }, [])

    // =============================================

    // JSX:

    if (autos === null) {
        return <div>Loading...</div>
    }

    return (
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
                        return (
                            <tr key={auto.id}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                <td>{auto.sold ? "SOLD" : "AVAILABLE"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
