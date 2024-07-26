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
    console.log(filteredSale);

    // ====================================


    // JSX:

    return (
        <div>
            <h1 className="mt-4 mb-3 sp-title">Salesperson History</h1>
            <div className="mb-3">
                <select onChange={handleSalespersonChange} value={selectedSalesperson} required name="salesperson" id="salesperson" className="form-select sph-select">
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


            {filteredSale.length > 0 ? (
                filteredSale.map(sale => (
                    <div key={sale.id} className="card mb-3 sp-card-container">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={sale.salesperson.picture_url} className="img-fluid rounded-start" alt="Salesperson headshot" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title sp-name">{sale.salesperson.first_name} {sale.salesperson.last_name}</h5>
                                    <hr />
                                    <span className="span">Customer:</span>
                                    <div className="card-text sp-details">{sale.customer.first_name} {sale.customer.last_name}</div>
                                    <hr />
                                    <span className="span">Sale Details:</span>
                                    <div className="sp-details">VIN: {sale.automobile.vin}</div>
                                    <div className="sp-details">Price Sold: ${sale.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="salesperson-nosales">
                    Currently no sales for this salesperson
                </p>
            )}

        </div >
    )


}