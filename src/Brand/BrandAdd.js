import React from 'react'

export default function BrandAdd() {
  return (
	<div className="card">
		<div className="card-body">
			<h4 className="card-title">Add Brand</h4>
			<form className="forms-sample">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						name="name"
						type="text"
						className="form-control"
						id="name"
						placeholder="Name"/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						name="description"
						className="form-control"
						id="description"
						rows="4"></textarea>
				</div>
				<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
				<button className="btn btn-light">Cancel</button>
			</form>
		</div>
	</div>
  )
}
