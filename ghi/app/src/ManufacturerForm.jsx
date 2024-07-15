import { useState } from "react";

function ManufacturerForm() {
    const [manufacturer, setManufacturer] = useState('');


    // ==========================================

    // Name state handler:

    const handleNameChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    // ==========================================

    // // Submit Handler (POST):

    // const handleSubmit = async (event) => {
    //     event.preventDefault();


    // }

    // ==========================================

    // JSX:

    return (
        <div>Loading Manufacturer Form</div>
    )
}

export default ManufacturerForm
