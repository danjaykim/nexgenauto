import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ManufacturerForm() {

    // States / Hooks:

    const [manufacturer, setManufacturer] = useState('');
    const navigate = useNavigate();

    // ==========================================

    // Name state handler:

    const handleNameChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    // ==========================================

    // // Submit Handler (POST):

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = manufacturer;

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                setManufacturer('');
                navigate("/manufacturers")
            } else {
                const errorDetails = await response.json();
                console.error(`Response status: ${response.status} ${response.statusText} // Error detail: ${errorDetails}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`);
        }
    }

    // ==========================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Manufacturer" value={manufacturer} required type="text" name="manufacturer"
                                id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer name</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}