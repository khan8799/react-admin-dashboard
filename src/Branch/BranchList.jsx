import Table from "../components/Table"
import { useSnackbar } from 'notistack';
import { makeRequest } from '../shared/utilities/httpHelper';
import { useEffect, useState } from "react";
import AddBranch from "./AddBranch";


function BranchList ({branch, getBranch, isAddBranchValue}) {

    const [selectedEditBranchValues, setSelectedEditBranchValues] = useState()
    const [isEditBranchFormActive, setIsEditBranchFormActive] = useState(false)
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    let branchDetail = {};

    // DELETE BRANCH

    const handleDelete = (name, id) => {
        branchDetail = {name,id}
        console.log(name, id);
        enqueueSnackbar(`Do you really want to delete ${name} coupon?`, {
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
        const url = `coupon/${branchDetail.id}`
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                enqueueSnackbar(`${branchDetail.name} coupon has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
                getBranch()
            })
    }

    // DELETE BRANCH


    const editBranchForm = (selectedBranch) => {
        setSelectedEditBranchValues(selectedBranch);    
        setIsEditBranchFormActive(!isEditBranchFormActive)
        console.log('cancle edit');
        
    }

    console.log('branch list');

    return(
        <>

            {isEditBranchFormActive && <AddBranch getBranch={getBranch} selectedEditBranchValues={selectedEditBranchValues} isEditBranchFormActive={editBranchForm}/>}

            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Branch Name </th>
                        <th> Longitude </th>
                        <th> Latitude </th>
                        <th> Delete Branch</th>
                        <th> Edit Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {branch.map((list, index) => {
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{list.name}</td>
                                <td>{list.couponCode}</td>
                                <td>{list.couponCode}</td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            onClick={() => handleDelete(list.name, list._id)}
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon">
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            onClick={() => editBranchForm(list)}
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon">
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

export default BranchList