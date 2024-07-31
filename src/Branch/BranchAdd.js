import React from 'react';

function BranchAdd() {
    return (
        <form className="forms-sample">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Branch Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                    name="name"
                    type="number"
                    className="form-control"
                    placeholder="latitude"/>
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                    name="name"
                    type="number"
                    className="form-control"
                    placeholder="longitude"/>
            </div>
            <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
            <button className="btn btn-light">Cancel</button>
        </form>
    )
}

export default BranchAdd;