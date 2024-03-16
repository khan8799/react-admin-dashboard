import Footer from './../shared/components/Footer/Footer'
import Breadcrumb from './../shared/components/Breadcrumb/Breadcrumb'
import AppSummary from './../AppSummary/AppSummary'

function Home() {
    const appSummary = [
        {
            parentClass: 'bg-gradient-danger',
            title: 'Weekly Sales',
            summary: '$ 15,0000',
            description: 'Increased by 60%'
        },
        {
            parentClass: 'bg-gradient-info',
            title: 'Weekly Orders',
            summary: '45,6334',
            description: 'Decreased by 10%'
        },
        {
            parentClass: 'bg-gradient-success',
            title: 'Visitors Online',
            summary: '95,5741',
            description: 'Increased by 5%'
        }
    ]
    return (
        <>
            <div className="main-panel">
                <div className="content-wrapper">
                    
                    <Breadcrumb name="Dashboard" />

                    <div className="row">
                    
                        {
                            appSummary.map((summary, i) => <AppSummary key={i} summary={summary}/>)
                        }
                        
                    </div>

                    <div className="row">
                        <div className="col-md-7 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                                        <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                                    </div>
                                    <canvas id="visit-sale-chart" className="mt-4"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Traffic Sources</h4>
                                    <canvas id="traffic-chart"></canvas>
                                    <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                        <img src="assets/images/faces/face1.jpg" className="me-2" alt="image" /> David Grey
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
                                        <img src="assets/images/faces/face2.jpg" className="me-2" alt="image" /> Stella Johnson
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
                                        <img src="assets/images/faces/face3.jpg" className="me-2" alt="image" /> Marina Michel
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
                                        <img src="assets/images/faces/face4.jpg" className="me-2" alt="image" /> John Doe
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

                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Updates</h4>
                                    <div className="d-flex">
                                        <div className="d-flex align-items-center me-4 text-muted font-weight-light">
                                            <i className="mdi mdi-account-outline icon-sm me-2"></i>
                                            <span>jack Menqu</span>
                                        </div>
                                        <div className="d-flex align-items-center text-muted font-weight-light">
                                            <i className="mdi mdi-clock icon-sm me-2"></i>
                                            <span>October 3rd, 2018</span>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6 pe-1">
                                            <img src="assets/images/dashboard/img_1.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                                            <img src="assets/images/dashboard/img_4.jpg" className="mw-100 w-100 rounded" alt="image" />
                                        </div>
                                        <div className="col-6 ps-1">
                                            <img src="assets/images/dashboard/img_2.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                                            <img src="assets/images/dashboard/img_3.jpg" className="mw-100 w-100 rounded" alt="image" />
                                        </div>
                                    </div>
                                    <div className="d-flex mt-5 align-items-top">
                                        <img src="assets/images/faces/face3.jpg" className="img-sm rounded-circle me-3" alt="image" />
                                        <div className="mb-0 flex-grow">
                                            <h5 className="me-2 mb-2">School Website - Authentication Module.</h5>
                                            <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="mdi mdi-heart-outline text-muted"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                                    <div className="w-50 -bar bg-gradient-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home