import { useState } from "react";


function ModelForm() {

    // States:

    const [formData, setFormData] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: '',
    });

    // const [manufacturer, setManufacturer]

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

    // JSX:

    return (
        <div>Loading Model Form</div>
    )
}

export default ModelForm
