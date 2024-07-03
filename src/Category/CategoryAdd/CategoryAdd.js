import { useState } from "react"

export default function CategoryAdd({onAddCategory}) {
    const initialValues = {name: '', description: ''}
    const [formValues, setFormValues] = useState(initialValues);
    const [isFormInValid, setFormInValid] = useState(true)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
        validateForm();
    }

    const validateForm = () => {
        let inValid = false;
        for (const key in formValues) {
            if (!formValues[key]) inValid = true;
        }
        setFormInValid(inValid);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

	    // const url = 'https://future-tech.onrender.com/api/category';
        const url = 'http://localhost:8080/api/category';
        const option = {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        }
        fetch(url, option)
            .then(res => res.json())
			.then(res => {
                onAddCategory(res.payload);
                setFormValues(initialValues)
			})
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Add Category</h4>
                    <form className="forms-sample" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                value={formValues.name}
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                id="description"
                                rows="4"
                                value={formValues.description}
                                onChange={handleChange}></textarea>
                        </div>
                        <button disabled={isFormInValid} type="submit" className="btn btn-gradient-primary me-2">Save</button>
                        <button className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}