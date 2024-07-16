import { useState } from "react";

export default function CustomerForm() {

    // States:

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
    });

    // ==================================

    // State Handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    // ==================================

    // Submit Handler:

    const handleSubmit = async (event) => {
        event.preventDefault();

        const customersUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const customerResponse = await fetch(customersUrl, fetchConfig);
            if (customerResponse.ok) {
                const newCustomer = await customerResponse.json();
                console.log(newCustomer);

                setFormData({
                    first_name: '',
                    last_name: '',
                    address: '',
                    phone_number: '',
                })
            } else {
                const errorDetail = await customerResponse.json();
                console.error(`Response status: ${customerResponse.status} ${customerResponse.statusText} // Error details: ${errorDetail}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`)
        }
    }

    // ==================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.first_name} placeholder="First name" required type="text" name="first_name"
                                id="first_name" className="form-control" />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.last_name} placeholder="Last name" required type="text" name="last_name"
                                id="last_name" className="form-control" />
                            <label htmlFor="style">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.address} placeholder="Address" type="text" name="address" id="address"
                                className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.phone_number} placeholder="Phone number" required type="text" name="phone_number" id="phone_number"
                                className="form-control" />
                            <label htmlFor="phone_number">Phone number</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}