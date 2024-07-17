import { useState, useEffect } from "react";


export default function SaleForm() {

    // States:

    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [formData, setFormData] = useState({
        automobile: '',
        salesperson: '',
        customer: '',
        price: '',
    });

    // ===================================

    // Fetching all data:

    const fetchData = async (event) => {
        const automobilesResponse = await fetch("http://localhost:8100/api/automobiles/");
        if (automobilesResponse.ok) {
            const data = await automobilesResponse.json();
            setAutomobiles(data.autos.filter(auto => auto.sold === false));
        }

        const salespeopleResponse = await fetch("http://localhost:8090/api/salespeople/");
        if (salespeopleResponse.ok) {
            const data = await salespeopleResponse.json();
            setSalespeople(data.salespeople);
        }

        const customersResponse = await fetch("http://localhost:8090/api/customers");
        if (customersResponse.ok) {
            const data = await customersResponse.json();
            setCustomers(data.customers);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // ===================================

    // State Handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    // ===================================

    // Submit Handler:

    const handleSubmit = async (event) => {
        event.preventDefault();


        const salesUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        };

        try {
            const saleResponse = await fetch(salesUrl, fetchConfig);
            if (saleResponse.ok) {
                // PUT:
                const automobileUrl = `http://localhost:8100/api/automobiles/${formData.automobile}/`;
                const automobileFetchConfig = {
                    method: "PUT",
                    body: JSON.stringify({ "sold": true }),
                    headers: { "Content-Type": "application/json" },
                }
                const automobileResponse = await fetch(automobileUrl, automobileFetchConfig);
                console.log(automobileResponse);

                setFormData({
                    automobile: '',
                    salesperson: '',
                    customer: '',
                    price: '',
                })
            } else {
                const errorDetail = await saleResponse.json();
                console.error(`Response status: ${saleResponse.status} ${saleResponse.statusText} // Error Details: ${errorDetail}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`)
        }


    }

    // ===================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                        <div className="mb-3">
                            <label htmlFor="automobile">Automobile VIN</label>
                            <select onChange={handleFormChange} value={formData.automobile} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose an Automobile VIN</option>
                                {automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.vin} value={automobile.vin}>
                                            {automobile.vin}
                                        </option>
                                    );
                                })};
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="salesperson">Salesperson</label>
                            <select onChange={handleFormChange} value={formData.salesperson} required name="salesperson" id="salesperson" className="form-select">
                                <option value="">Choose a Salesperson</option>
                                {salespeople.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            ID: {salesperson.id} &nbsp; - &nbsp;{salesperson.first_name} {salesperson.last_name}
                                        </option>
                                    );
                                })};
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customer">Customer</label>
                            <select onChange={handleFormChange} value={formData.customer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a Customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            ID: {customer.id} &nbsp; - &nbsp; {customer.first_name} {customer.last_name}
                                        </option>
                                    );
                                })};
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.price} placeholder="price" required type="number" name="price"
                                id="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
