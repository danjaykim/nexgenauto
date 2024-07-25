import { useState, useEffect } from "react";


export default function SalesPersonList() {

    // States:

    const [salespeople, setSalespeople] = useState([]);

    console.log(salespeople);

    // ====================================

    // Fetch salespeople data:

    const fetchData = async () => {
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const response = await fetch(salespeopleUrl);
        if (response.ok) {
            const data = await response.json();
            const salespeopleData = data.salespeople;

            const salesUrl = "http://localhost:8090/api/sales/";
            const salesResponse = await fetch(salesUrl);
            if (salesResponse.ok) {
                const salesData = await salesResponse.json();
                // console.log(salesData);
                const salespersonDataWithSalesData = salespeopleData.map(salesperson => ({
                    ...salesperson,
                    sales: salesData.sales.filter(sale => sale.salesperson.id === salesperson.id)
                }))
                setSalespeople(salespersonDataWithSalesData);
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ====================================

    // JSX:

    if (salespeople === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2 className="text-center manu-title">Salespeople</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {salespeople.map(salesperson => {
                    return (
                        <div className="col" key={salesperson.id}>
                            <div className="card salesperson-card">
                                <div className="card-body text-center">
                                    <div className="hs-div-container">
                                        <img src={salesperson.picture_url} alt="Salesperson Headshot Photo" className="mb-3 headshot-container" />
                                    </div>
                                    <h5 className="sp-name">{salesperson.first_name} {salesperson.last_name}</h5>
                                    <p>Employee ID: <b>{salesperson.employee_id}</b></p>
                                    <hr />
                                    <div>
                                        <p><b>{salesperson.sales.length}</b> Sales Made:</p>
                                        {salesperson.sales.length > 0 ? (
                                            <div>
                                                {salesperson.sales.map((sale, index) => (
                                                    <p key={sale.id}>{index + 1}) VIN: {sale.automobile.vin}</p>
                                                ))}
                                            </div>
                                        ) : <p>No sales currently</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}