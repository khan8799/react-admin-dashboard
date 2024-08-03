import React from 'react';

function BranchAdd() {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event);
    }

    return (
        <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Branch Name" />
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                    name="Latitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 28.567, 72.123" />
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                    name="Longitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 16.424, 32.464" />
            </div>
            <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
            <button className="btn btn-light">Cancel</button>
        </form>
    )
}

export default BranchAdd;