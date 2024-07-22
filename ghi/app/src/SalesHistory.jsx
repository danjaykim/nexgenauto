import { useState, useEffect } from "react";


export default function SalesHistory() {

    // States:

    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [selectedSalesperson, setSelectedSalesperson] = useState("");

    // ====================================

    // Fetch all data:

    const fetchData = async () => {
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const response = await fetch(salespeopleUrl);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }

        const salesUrl = "http://localhost:8090/api/sales/";
        const salesResponse = await fetch(salesUrl);
        if (salesResponse.ok) {
            const data = await salesResponse.json();
            setSales(data.sales);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ====================================

    // Salesperson change handler:

    const handleSalespersonChange = (event) => {
        setSelectedSalesperson(event.target.value);
    }

    // ====================================

    // Prepare filter for mapping of sale:

    const filteredSale = sales.filter(sale => sale.salesperson.id === Number(selectedSalesperson));

    // ====================================


    // JSX:

    return (
        <div>
            <h1 className="mt-4 mb-3">Salesperson History</h1>
            <div className="mb-3">
                <select onChange={handleSalespersonChange} value={selectedSalesperson} required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a Salesperson</option>
                    {salespeople.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.id}>
                                {salesperson.first_name} {salesperson.last_name}
                            </option>
                        );
                    })};
                </select>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSale.map(sale => {
                        return (
                            <tr key={sale.id}>
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