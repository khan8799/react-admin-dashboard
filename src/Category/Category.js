
function Category(){
    return (
        <>
       <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Recent Tickets</h4>
                                <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th> Assignee </th>
                                            <th> Subject </th>
                                            <th> Status </th>
                                            <th> Last Update </th>
                                            <th> Tracking ID </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                        <img alt=""  src="assets/images/faces/face1.jpg" className="me-2" alt="image" /> David Grey
                                        </td>
                                        <td> Fund is not recieved </td>
                                        <td>
                                        <label className="badge badge-gradient-success">DONE</label>
                                        </td>
                                        <td> Dec 5, 2017 </td>
                                        <td> WD-12345 </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <img alt="" src="assets/images/faces/face2.jpg" className="me-2" alt="image" /> Stella Johnson
                                        </td>
                                        <td> High loading time </td>
                                        <td>
                                        <label className="badge badge-gradient-warning">PROGRESS</label>
                                        </td>
                                        <td> Dec 12, 2017 </td>
                                        <td> WD-12346 </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <img alt="" src="assets/images/faces/face3.jpg" className="me-2" alt="image" /> Marina Michel
                                        </td>
                                        <td> Website down for one week </td>
                                        <td>
                                        <label className="badge badge-gradient-info">ON HOLD</label>
                                        </td>
                                        <td> Dec 16, 2017 </td>
                                        <td> WD-12347 </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <img alt="" src="assets/images/faces/face4.jpg" className="me-2" alt="image" /> John Doe
                                        </td>
                                        <td> Loosing control on server </td>
                                        <td>
                                        <label className="badge badge-gradient-danger">REJECTED</label>
                                        </td>
                                        <td> Dec 3, 2017 </td>
                                        <td> WD-12348 </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                                  
        </>
    )
}
export default Category;