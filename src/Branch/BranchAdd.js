export default function BranchAdd() {
    return (
        <form className="forms-sample" >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="branch name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Latitude</label>
                <input
                    name="latitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 65.786 , 76.987"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Longitude</label>
                <input
                    name="longitude"
                    type="number"
                    className="form-control"
                    placeholder="eg. 35.786 , 96.987"
                />
            </div>
            <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
            <button className="btn btn-light">Cancel</button>
        </form>
    )
}