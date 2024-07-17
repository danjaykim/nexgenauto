import { useState, useEffect } from "react";


export default function SalesList() {

    // States:

    const [sales, setSales] = useState([]);

    // ===================================

    // Fetch sales data:

    const fetchData = async () => {
        const salesUrl = "http://localhost:8090/api/sales/";
        const response = await fetch(salesUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setSales(data.sales);
        }
    }

    useEffect(() => {
        fetchData();
    })

    // ===================================

    // JSX:

    return (
        <div>
            <h1 className="mt-4 mb-3">Sales History</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{sale.salesperson.employee_id}</td>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>${sale.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}