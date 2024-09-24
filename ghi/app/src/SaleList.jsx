import { useState, useEffect } from "react";


export default function SalesList() {

    // States:

    const [sales, setSales] = useState([]);

    console.log(sales);

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
    }, [])

    // ===================================

    // JSX:

    return (
        <div>
            <h1 className="text-center manu-title">Sales</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {sales.map(sale => {
                    return (
                        <div className="col" key={sale.id}>
                            <div className="card sale-card">
                                <div className="text-center sale-card2">
                                    <h5>Sale ID: {sale.id}</h5>
                                    <div>VIN: <b>{sale.automobile.vin}</b></div>
                                    <div>Price Sold: <b>${sale.price}</b></div>
                                    <hr />
                                    <p>Salesperson Info:</p>
                                    <div><b>{sale.salesperson.first_name} {sale.salesperson.last_name}</b></div>
                                    <div>Employee ID: {sale.salesperson.id}</div>
                                    <hr />
                                    <p>Customer Info:</p>
                                    <div><b>{sale.customer.first_name} {sale.customer.last_name}</b></div>
                                    <div>Phone Number: {sale.customer.phone_number}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
// <div>
//     <h1 className="mt-4 mb-3">Sales</h1>
//     <table className="table table-striped table-hover">
//         <thead>
//             <tr>
//                 <th>Salesperson Employee ID</th>
//                 <th>Salesperson Name</th>
//                 <th>Customer</th>
//                 <th>VIN</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             {sales.map(sale => {
//                 return (
//                     <tr key={sale.id}>
//                         <td>{sale.salesperson.employee_id}</td>
//                         <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
//                         <td>{sale.customer.first_name} {sale.customer.last_name}</td>
//                         <td>{sale.automobile.vin}</td>
//                         <td>${sale.price}</td>
//                     </tr>
//                 );
//             })}
//         </tbody>
//     </table>
// </div>