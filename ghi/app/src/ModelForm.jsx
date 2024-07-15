import { useState, useEffect } from "react";


function ModelForm() {

    // States:

    const [formData, setFormData] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: '',
    });

    const [manufacturers, setManufacturers] = useState([]);

    // ============================================

    // State Handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    // ============================================

    // Submit Handler (POST):

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = "http://localhost:8100/api/models";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                const newModel = await response.json();
                console.log(newModel);

                // Reset fields after successful POST:
                setFormData({
                    name: '',
                    picture_url: '',
                    manufacturer_id: '',
                })
            } else {
                const errorDetails = await response.json();
                console.error(`Response status: ${response.status} ${response.statusText} // Error Detail: ${errorDetails}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`);
        }
    }

    // ============================================

    // Fetch manufacturer data:

    const fetchData = async () => {
        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(manufacturerUrl);
        // console.log(response);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // ============================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a vehicle model</h1>

                    <form onSubmit={handleSubmit} id="create-model-form">

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.name} placeholder="Model name" required type="text" name="name"
                                id="name" className="form-control" />
                            <label htmlFor="name">Model name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.picture_url} placeholder="Picture URL" required type="text" name="picture_url"
                                id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>

                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.manufacturer_id} required name="manufacturer_id" id="manufacturer" className="form-select">
                                <option value="">Choose a manufacturer</option>
                                {manufacturers.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    );
                                })};
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>

                    </form>

                </div>
            </div>
        </div>

        // <div>hi</div>
    )
}

export default ModelForm
