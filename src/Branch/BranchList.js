import { useState, useEffect } from "react";
import Table from "../components/Table";
import { makeRequest } from "../shared/utilities/httpHelper";
import { closeSnackbar, enqueueSnackbar } from "notistack";

export default function BranchList( {toggleLoading} ) {
    const [branches, setBranches] = useState([])


    let selectedBranch = null;

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
    const onDelete = (branch) => {
        selectedBranch = branch;
        enqueueSnackbar(`Do you really want to delete ${branch.name} coupon?`, {
            variant: 'error',
            anchorOrigin: {vertical: 'top', horizontal: 'center'},
            action,
            persist: true,
            preventDuplicate: true
        })
    }
    const action = () => (
        <>
            <button className="btn btn-sm btn-danger me-2" onClick={() => {
                closeSnackbar()
                deleteBranch()
            }}>
                Yes, Delete it
            </button>
            <button className="btn btn-sm btn-success" onClick={() => closeSnackbar()}>
                No
            </button>
        </>
    );
    const deleteBranch = () => {
        toggleLoading(true)
        const url = `branch/${selectedBranch._id}`
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                enqueueSnackbar(`${selectedBranch.name} branch has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
                getBranches()
            })
            .finally(() => toggleLoading(false))
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