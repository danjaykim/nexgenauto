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
            <h2 className="text-center">Salespeople</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {salespeople.map(salesperson => {
                    return (
                        <div className="col" key={salesperson.id}>
                            <div className="card salesperson-card">
                                {/* <img src={salesperson.picture_url} className="card-img-top" alt="Salesperson image" /> */}
                                <div className="card-body text-center">
                                    <h5>{salesperson.first_name} {salesperson.last_name}</h5>
                                    <p>{salesperson.employee_id}</p>
                                    <hr />
                                    <div>
                                        <p>{salesperson.sales.length} Sales Made:</p>
                                        {salesperson.sales.length > 0 ? (
                                            <div>
                                                {salesperson.sales.map(sale => (
                                                    <p key={sale.id}>{sale.customer.first_name} {sale.customer.last_name}</p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>No sales currently</p>
                                        )}
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