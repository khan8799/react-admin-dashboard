export default function ProductAdd() {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Add Product</h4>
                    <form className="forms-sample" onSubmit={submitHandler}>
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
                            <label htmlFor="price">Price</label>
                            <input
                                name="price"
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="eg. 20"/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="meal" id="veg" value="veg" />
                                    Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="meal" id="nonVeg" value="non-veg" checked />
                                    Non-Vegetarian
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-gradient-primary me-2">Save</button>
                        <button type="button" className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}