import Table from "../components/Table"
import { useSnackbar } from 'notistack';
import { makeRequest } from '../shared/utilities/httpHelper';
import { useState } from "react";
import AddBranch from "./AddBranch";
import Loader from "../shared/components/Loader/Loader";


function BranchList ({branch, setBranchList}) {

    const [loading, setLoading] = useState(false)
    const [selectedEditBranchValues, setSelectedEditBranchValues] = useState()
    const [isEditBranchFormActive, setIsEditBranchFormActive] = useState(false)
    const [selecteBranchIndex, setSelecteBranchIndex] = useState(null )
    
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
        setLoading(true)
        const url = `branch/${branchDetail.id}`
        
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                removeDelBranchFromList()
                enqueueSnackbar(`" ${branchDetail.name} " Branch has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
            })  
        .finally(() => setLoading(false))      
    };

    const removeDelBranchFromList = () => {
        const removeIteam = branch.filter((elem) => {
            return (elem._id !== branchDetail.id)
        })
        
        setBranchList(removeIteam)
    }

    // EDIT BRANCH

    const editBranchForm = (selectedBranch, index) => {
        setSelecteBranchIndex(index)
        
        setSelectedEditBranchValues(selectedBranch);
        setIsEditBranchFormActive(!isEditBranchFormActive)        
    }

    const addEditBranchInList = (name, latitude, longitude) => {
        let selectedEditBranch = [...branch]
        
        selectedEditBranch[selecteBranchIndex].name = name;
        selectedEditBranch[selecteBranchIndex].location.latitude = latitude;
        selectedEditBranch[selecteBranchIndex].location.longitude = longitude;
    }

    return(
        <>

            {loading && <Loader/>}

            {isEditBranchFormActive && <AddBranch selectedEditBranchValues={selectedEditBranchValues} isEditBranchFormActive={editBranchForm} addEditBranchInList={addEditBranchInList}/>}

            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Branch Name </th>
                        <th> Address </th>
                        <th> landmark </th>
                        <th> locality </th>
                        <th> city </th>
                        <th> state </th>
                        <th> pincode </th>
                        <th> Latitude </th>
                        <th> Longitude </th>
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
                                <td>{list.address}</td>
                                <td>{list.landmark}</td>
                                <td>{list.locality}</td>
                                <td>{list.city}</td>
                                <td>{list.state}</td>
                                <td>{list.pincode}</td>
                                <td>{list.location.latitude}</td>
                                <td>{list.location.longitude}</td>
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
                                            onClick={() => editBranchForm(list, index)}
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