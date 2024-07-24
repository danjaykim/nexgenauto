import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ManufacturerForm() {

    // States / Hooks:

    const [manufacturerData, setManufacturerData] = useState({
        name: '',
        picture_url: '',
    });

    const navigate = useNavigate();

    // ==========================================

    // Form change handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setManufacturerData({
            ...manufacturerData,
            [inputName]: value,
        })
    }

    // ==========================================

    // // Submit Handler (POST):

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(manufacturerData),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                setManufacturerData({
                    "name": '',
                    "picture_url": '',
                });

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
                            <input onChange={handleFormChange} placeholder="Manufacturer name" value={manufacturerData.name} required type="text" name="name"
                                id="manufacturer_name" className="form-control" />
                            <label htmlFor="manufacturer_name">Manufacturer name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Manufacturer logo" value={manufacturerData.picture_url} type="text" name="picture_url"
                                id="manufacturer_logo" className="form-control" />
                            <label htmlFor="manufacturer_logo">Manufacturer Logo Picture URL (Optional)</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}