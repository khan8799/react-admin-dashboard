import React from 'react'

export default function BranchAdd() {

    return (
		<form className="forms-sample">
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
					id="name"
					placeholder="Branch"/>
					
			</div>
			<div className="form-group">
				<label htmlFor="description">Latitude</label>
				<input
					name="description"
					type="text"
					className="form-control"
                    placeholder='eg:20.9,26.4'></input>
			</div>
			<div className="form-group">
				<label htmlFor="description">Longitude</label>
				<input
					name="description"
					type="text"
					className="form-control"
                    placeholder='eg:5,5.5'></input>
			</div>
			<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
			<button className="btn btn-light">Cancel</button>
		</form>
	)
}
