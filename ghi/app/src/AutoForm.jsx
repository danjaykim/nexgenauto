import { useState, useEffect } from "react";


export default function AutoForm() {

    // States:

    const [formData, setFormData] = useState({
        color: '',
        year: '',
        vin: '',
        model_id: '',
    })

    const [vehicleModels, setVehicleModels] = useState([]);

    // =================================

    // State Handler:

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value,
        })
    }

    // =================================

    // Submit Handler (POST):

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = "http://localhost:8100/api/automobiles/";

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                const newAutomobile = await response.json();
                console.log(newAutomobile);

                // Reset fields after successful POST:
                setFormData({
                    color: '',
                    year: '',
                    vin: '',
                    model_id: '',
                })
            } else {
                const errorDetails = await response.json();
                console.error(`Response status: ${response.status} ${response.statusText} // Error detail: ${errorDetails}`);
            }
        } catch (e) {
            console.error(`Fetch error: ${e}`);
        }
    }

    // =================================

    // Fetch vehicle models:

    const fetchData = async () => {
        const modelUrl = "http://localhost:8100/api/models/";
        const response = await fetch(modelUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setVehicleModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    // =================================

    // JSX:

    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an automobile to inventory</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.color} placeholder="Color" required type="text" name="color"
                                id="color" className="form-control" />
                            <label htmlFor="name">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.year} placeholder="Year" required type="text" name="year"
                                id="year" className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.vin} placeholder="VIN" required type="text" name="vin"
                                id="vin" className="form-control" />
                            <label htmlFor="year">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.model_id} required name="model_id" id="model" className="form-select">
                                <option value="">Choose a model</option>
                                {vehicleModels.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
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
    )
}