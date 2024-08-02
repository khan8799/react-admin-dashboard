import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { makeRequest } from '../shared/utilities/httpHelper';
import Pagination from '../shared/components/Pagination/Pagination';

export default function BranchList() {
    const [branches, setBranches] = useState([]);
    const [pageNo, setPageNo] = useState([]);
    const [totalItems, settotalItems] = useState();

    useEffect(() => getBranch(), [pageNo] )

    const getBranch = () => {
    const url = `brand?page=$&searchText=$`
    makeRequest(url)
    .then(res => {
        setBranches(res.payload)
        settotalItems(res.totalRecords)
        
    })
    }

    const handlePageChange = (page) => {
        setPageNo(page)
    }

    return (
        <>
            <div className="d-flex mb-2" role="search">
                <input
                    type="text"
                    className="form-control form-control-dark text-bg-dark"
                    placeholder="Search..."
                    aria-label="Search"/>
                <button
                    type="button"
                    className="btn btn-inverse-primary me-1">Search</button>
                <button
                    type="button"
                    className="btn btn-inverse-danger">reset</button>
            </div>
        
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch, index) => {
                        return (
                            <tr key={ branch._id }>
                                <td> { index } </td>
                                <td> { branch.name } </td>
                                <td>
                                    <div  className="w-100 ">
                                        { branch.description } 
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon">
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon">
                                            <i className="mdi mdi-content-save-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination
                    totalRecords={totalItems}
                    handlePageChange={handlePageChange}/>
        </>
    )
}
