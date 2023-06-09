import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
function NewColorForm({ add }) {

    const INITIAL_STATE = {
        name: '',
        color: '#000000'
    }
    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        add(formData);
        setFormData(INITIAL_STATE);
        navigate("/colors");

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Color Name: </label>
            <input
                id='name'
                type='text'
                name='name'
                placeholder='Color'
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor='color'>Color Picker </label>
            <input
                id='color'
                type='color'
                name='color'
                value={formData.color}
                onChange={handleChange}
            />

            <button>Add Color</button>

        </form>
    )
}


export default NewColorForm;