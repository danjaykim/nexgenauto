import { useState, useEffect } from "react";


export default function CustomerList() {

    // States:

    const [customers, setCustomers] = useState([]);

    // ===================================

    // Fetch customer data:

    const fetchData = async () => {
        const customersUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(customersUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setCustomers(data.customers);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ===================================

    // JSX:

    return (
        <div>
            <h1 className="mt-4 mb-3">Customers</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.phone_number}</td>
                                <td>{customer.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}