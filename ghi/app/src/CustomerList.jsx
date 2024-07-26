import { useState, useEffect } from "react";


export default function CustomerList() {

    // States:

    const [customers, setCustomers] = useState([]);

    // console.log(customers);

    // ===================================

    // Fetch customer data:

    const fetchData = async () => {
        const customersUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(customersUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            const customerData = data.customers
            setCustomers(customerData);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ===================================

    // JSX:

    if (customers === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="text-center manu-title">Customers</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {customers.map(customer => {
                    return (
                        <div className="col" key={customer.id}>
                            <div className="card customer-card">
                                <div className="card-body text-center">
                                    <h5>{customer.first_name} {customer.last_name}</h5>
                                    <hr />
                                    <p>Contact Information:</p>
                                    <div>{customer.phone_number}</div>
                                    <div>{customer.address}</div>
                                    <hr />
                                    <p>Add purchases here</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}