import { useState } from "react";


function AutoForm() {

    // States:

    const [formData, setFormData] = useState({
        color: '',
        year: '',
        vin: '',
        model_id: '',
    })

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

        const url = "http://localhost:8100/api/automobiles";

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

    // JSX:

    return (
        <div>Loading Automobile Form</div>
    )
}

export default AutoForm
