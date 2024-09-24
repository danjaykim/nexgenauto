import { useEffect, useState } from 'react';

export default function AutoList() {

    // States:

    const [autos, setAutos] = useState([]);
    console.log(autos);

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
            <h1 className="text-center manu-title">Automobiles</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {autos.map(auto => {
                    return (
                        <div className="col" key={auto.id}>
                            <div className="card auto-card">
                                <div className="card-body text-center auto-card">
                                    <h5>{auto.year} {auto.model.manufacturer.name} {auto.model.name}</h5>
                                    <hr />
                                    <p>VIN: {auto.vin}</p>
                                    <p>Color: {auto.color}</p>
                                    <p className={auto.sold ? 'sold' : 'available'}>{auto.sold ? 'SOLD' : 'AVAILABLE'}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}