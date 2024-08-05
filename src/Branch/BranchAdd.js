import React, { useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper';

export default function BranchAdd({toggleLoading, onAddBranch}) {
	const initialValue = {name: '', latitude: '', longitude: ''}
	const [formValues, setFormValues] = useState(initialValue)


	const handleChange = (event) => {
		const {name, value} = event.target
		setFormValues({
			...formValues,
			[name]: value
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		toggleLoading(true);
		// selectedCoupon ? updateCoupon() : addCoupon()
		add()
	  }

	const add = () => {
		const url = 'branch';
		const data = {
			name:formValues.name,
			location:{
				latitude:formValues.latitude,
				longitude:formValues.longitude
			}
		}
		const option = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
                "Content-Type": "application/json",
            },
		}

		makeRequest(url, option)
			.then(res => {
				// onAddBranch(formValues);
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
					placeholder="Branch"
					value={formValues.name}
					onChange={handleChange}/>
					
			</div>
			<div className="form-group">
				<label htmlFor="description">Latitude</label>
				<input
					name="latitude"
					type="text"
					className="form-control"
                    placeholder='eg:20.9,26.4'
					value={formValues.latitude}
					onChange={handleChange}></input>
			</div>
			<div className="form-group">
				<label htmlFor="description">Longitude</label>
				<input
					name="longitude"
					type="text"
					className="form-control"
                    placeholder='eg:5,5.5'
					value={formValues.longitude}
					onChange={handleChange}></input>
			</div>
			<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
			<button className="btn btn-light">Cancel</button>
		</form>
	)
}
