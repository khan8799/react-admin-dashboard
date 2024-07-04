import { useState } from "react"

export default function CategoryAdd({onAddCategory}) {
    const initialValues = {name: '', description: ''}
    const formErrorMsg = {name: 'Name is required', description: 'Description is required'}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
        setFormControlErrorMsg(name, value);
    }

    const setFormControlErrorMsg = (controlName, value) => {
        setFormErrors((prev) => {
            return {
                ...prev,
                [controlName]: value ? '' : formErrorMsg[controlName]
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isFormInvalid()) return;

	    const url = 'https://future-tech.onrender.com/api/category';
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
                onAddCategory(res.payload)
                resetForm()
			})
    }

    const isFormInvalid = () => {
        let inValid = false;
        for (const key in formValues) {
            if (!formValues[key]) {
                inValid = true;
                setFormControlErrorMsg(key, formValues[key])
            }
        }
        return inValid
    }

    const resetForm = () => {
        setFormValues(initialValues)
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
                            {
                                formErrors.name &&
                                <div className="form-error">
                                    { formErrors.name }
                                </div>
                            }
                            
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
                            {
                                formErrors.description &&
                                <div className="form-error">
                                    { formErrors.description }
                                </div>
                            }
                        </div>
                        <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
                        <button className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}