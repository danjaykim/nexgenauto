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
                                <td>{manu.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}