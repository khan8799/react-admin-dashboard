import React, { useEffect, useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper'

export default function BranchAdd({ toggleLoading, onAddBrand, selectedBrand }) {
  console.log("brandAdd ");

	const initialValue = {name: '', description: ''}
	const [formValues, setFormValues] = useState(initialValue)

	useEffect(() => {
		if (selectedBrand) {
			setFormValues({name: selectedBrand.name, description: selectedBrand.description})
		}
	}, [selectedBrand])

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		selectedBrand ? update() : add();
	}

	const add = () => {
		toggleLoading(true)
		const url = 'brand';
		const option = {
			method: 'POST',
			body: JSON.stringify(formValues),
			headers: {
                "Content-Type": "application/json",
            },
		}

		makeRequest(url, option)
			.then(res => {
				onAddBrand(formValues);
				setFormValues(initialValue)
			})
			.finally(() => toggleLoading(false))
	}

	const update = () => {
		toggleLoading(true)
		const url = `brand/${selectedBrand._id}`;
		const option = {
			method: 'PUT',
			body: JSON.stringify({
				name: formValues.name,
				description: formValues.description
			}),
			headers: {
                "Content-Type": "application/json",
            },
		}

		makeRequest(url, option)
			.then(res => {
				onAddBrand(formValues);
				setFormValues(initialValue)
			})
			.finally(() => toggleLoading(false))

	}

	return (
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
			<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
			<button className="btn btn-light">Cancel</button>
		</form>
	)
}
