import { useState, useEffect } from "react";


export default function SalesPersonList() {

    // States:

    const [salespeople, setSalespeople] = useState([]);

    // ====================================

    // Fetch salespeople data:

    const fetchData = async () => {
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const response = await fetch(salespeopleUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setSalespeople(data.salespeople);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ====================================

    // JSX:

    return (
        <div>
            <h1 className="mt-4 mb-3">Salespeople</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(salesperson => {
                        return (
                            <tr key={salesperson.id}>
                                <td>{salesperson.employee_id}</td>
                                <td>{salesperson.first_name}</td>
                                <td>{salesperson.last_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}