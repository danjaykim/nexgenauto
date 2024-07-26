import { useEffect, useState } from 'react';

export default function ManufacturerList() {

    // States:

    const [manus, setManus] = useState([]);

    // =============================================

    // Fetch manufacturer data:

    const fetchData = async () => {
        const URL = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            setManus(data.manufacturers);
        }
    }

    useEffect(() => { fetchData() }, [])

    // =============================================

    // JSX:

    if (manus === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="text-center manu-title">Current Manufacturers in Inventory</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {manus.map(manu => {
                    return (
                        <div className="col" key={manu.id}>
                            <div className="card manu-card">
                                <img src={manu.picture_url} className="card-img-top" alt="Manufacturer logo" />
                                <hr />
                                <div className="card-body text-center">
                                    <h3>{manu.name}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}