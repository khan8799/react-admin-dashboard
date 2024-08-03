import { useState, useEffect } from "react";
import Table from "../components/Table";
import { makeRequest } from "../shared/utilities/httpHelper";

export default function BranchList( {toggleLoading} ) {
    const [branches, setBranches] = useState([])
    useEffect(() => getBranches(), [])

    const getBranches = () => {
        toggleLoading(true)
        const url = `branch`
        makeRequest(url)
            .then(res => {
                setBranches(res.payload)
            })
            .finally(() => toggleLoading(false))
    }
    const onDelete = () => {
        console.log('delete');
    }
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Latitude </th>
                        <th> Longitude</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch, index) => {
                        return (
                            <tr key={index + 1}>
                                <td> {index + 1} </td>
                                <td>{branch.name}  </td>
                                <td>
                                    <div className="w-100 ">
                                        {branch.location.latitude}
                                    </div>
                                </td>
                                <td>
                                <div className="w-100 ">
                                        {branch.location.longitude}
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon"
                                            onClick={() => onDelete(branch)}>
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon"
                                            >
                                            <i className="mdi mdi-content-save-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}