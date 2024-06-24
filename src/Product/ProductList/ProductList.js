import Breadcrumb from './../../shared/components/Breadcrumb/Breadcrumb'
import ProductAdd from './../ProductAdd/ProductAdd'

export default function ProductList() {
    const products = [1, 2, 3, 4]
    return (
        <>
            <Breadcrumb name="Product" />

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
                            {
                                products.map((product, index) => {
                                    return (
                                    <>
                                        <tr key={index + 1}>
                                        <td> 1 </td>
                                        <td> Herman Beck </td>
                                        <td> May 15, 2015 </td>
                                        <td>
                                            <div className="progress">
                                                <div className="w-25 progress-bar bg-gradient-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                        </tr>
                                    </>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    {/* TODO: Add product component*/}
                    <ProductAdd />
                </div>
            </div>
        </>
    )
}