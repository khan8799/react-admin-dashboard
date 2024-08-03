import React, { useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper';

export default function BranchAdd({toggleLoading, onAddBranch}) {
	const initialValue = {name: '', description: '', description: ''}
	const [formValues, setFormValues] = useState(initialValue)


	const handleChange = (event) => {
		const {name, value} = event.target
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const add = () => {
		toggleLoading(true)
		const url = 'branch';
		const option = {
			method: 'POST',
			body: JSON.stringify(formValues),
			headers: {
                "Content-Type": "application/json",
            },
		}

		makeRequest(url, option)
			.then(res => {
				onAddBranch(formValues);
				setFormValues(initialValue)
			})
			.finally(() => toggleLoading(false))
	}

    return (
		<form className="forms-sample">
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
					id="name"
					placeholder="Branch"
					value={formValues.name}
					onChange={handleChange}/>
					
			</div>
			<div className="form-group">
				<label htmlFor="description">Latitude</label>
				<input
					name="description"
					type="text"
					className="form-control"
                    placeholder='eg:20.9,26.4'
					value={formValues.description}
					onChange={handleChange}></input>
			</div>
			<div className="form-group">
				<label htmlFor="description">Longitude</label>
				<input
					name="description"
					type="text"
					className="form-control"
                    placeholder='eg:5,5.5'
					value={formValues.description}
					onChange={handleChange}></input>
			</div>
			<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
			<button className="btn btn-light">Cancel</button>
		</form>
	)
}
