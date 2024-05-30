import Breadcrumb from './../../shared/components/Breadcrumb/Breadcrumb'

function CategoryList() {
    return (
        <>
            <Breadcrumb name="Category" />

            <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Project Status</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Due Date </th>
                            <th> Progress </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            <td> May 15, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-25 progress-bar bg-gradient-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 2 </td>
                            <td> Messsy Adam </td>
                            <td> Jul 01, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-75 progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 3 </td>
                            <td> John Richards </td>
                            <td> Apr 12, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-90 progress-bar bg-gradient-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 4 </td>
                            <td> Peter Meggik </td>
                            <td> May 15, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-50 progress-bar bg-gradient-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Edward </td>
                            <td> May 03, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-35 progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Ronald </td>
                            <td> Jun 05, 2015 </td>
                            <td>
                              <div className="progress">
                                <div className="w-65 progress-bar bg-gradient-info" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-white">Todo</h4>
                    <div className="add-items d-flex">
                      <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                      <button className="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                    </div>
                    <div className="list-wrapper">
                      <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                        <li>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Meeting with Alisa </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Call John </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Create invoice </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Print Statements </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Prepare for presentation </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Pick up kids from school </label>
                          </div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default CategoryList
