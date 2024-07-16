import { useState } from "react";





export default function SalesPersonForm() {

    // States:

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
    });

    // ==============================================

    // State Handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    // ==============================================

    // Submit Handler:

    const handleSubmit = async (event) => {
        event.preventDefault();

        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const salespersonResponse = await fetch(salespeopleUrl, fetchConfig);
            if (salespersonResponse.ok) {
                const newSalesperson = await salespersonResponse.json();
                console.log(newSalesperson);

                // Reset fields after successful POST:
                setFormData({
                    first_name: '',
                    last_name: '',
                    employee_id: '',
                })
            } else {
                const errorDetail = await salespersonResponse.json();
                console.error(`Response status: ${salespersonResponse.status} ${salespersonResponse.statusText} // Error Details: ${errorDetail}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`);
        }
    }

    // ==============================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.first_name} placeholder="First name" required type="text" name="first_name"
                                id="first_name" className="form-control" />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.last_name} placeholder="Last name" required type="text" name="last_name"
                                id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.employee_id} placeholder="Employee ID" type="text" name="employee_id" id="employee_id"
                                className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

