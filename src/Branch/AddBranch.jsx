import { useRef } from "react"
import { makeRequest } from '../shared/utilities/httpHelper';
import { useSnackbar } from 'notistack';


function AddBranch ({getBranch, selectedEditBranchValues, isAddBranchFormActive, isEditBranchFormActive, addNewBranchInList, addEditBranchInList}) {
    
    const { enqueueSnackbar } = useSnackbar();

    let formValues = {}

    console.log(selectedEditBranchValues);
    

    const branchName = useRef('')
    const longitude = useRef(null)
    const latitude = useRef(null)

    // ADD NEW BRANCH

    const addBranch = () => {
        const branchDetail = {
            name: branchName.current.value,
            location: {
                latitude: Number(latitude.current.value),
                longitude: Number(longitude.current.value)
            }
        }
        
        makeRequest('branch', {
          method: 'POST',
          body: JSON.stringify(branchDetail),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => {
            isAddBranchFormActive()
          enqueueSnackbar(`Branch has been created successfully`, {
            variant: 'success',
            anchorOrigin: {vertical: 'top', horizontal: 'center'},
            preventDuplicate: true
          })
        })
        .finally(() => {addNewBranchInList(branchDetail)})
    }

    // EDIT BRNACH

    const editBranch = () => {
        formValues = {
            name: branchName.current.value,
            longitude: Number(longitude.current.value),
            latitude: Number(latitude.current.value),
        }
        
        const url = `coupon/${selectedEditBranchValues._id}`
            makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => {
            isEditBranchFormActive()
            enqueueSnackbar(`${selectedEditBranchValues.name} Coupon has been updated successfully`, {
                variant: 'success',
                anchorOrigin: {vertical: 'top', horizontal: 'center'},
                preventDuplicate: true
            })
        })   
        .finally(() => {addEditBranchInList(formValues.name, formValues.latitude, formValues.longitude)})     
    }

    // HANDLE SAVE BUTTON

    const handleSave = () => {
        isAddBranchFormActive ? addBranch() : editBranch()
    }

    return(
        <>
            <div className="form-container ">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
            {selectedEditBranchValues ? <h3 className="mb-4">{`Edit ${selectedEditBranchValues.name} Branch`}</h3> : ''}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Ex. Allahbad, uttar pradesh"
                        ref={branchName}
                        defaultValue={selectedEditBranchValues ? selectedEditBranchValues.name : ''}/>
                </div>

                <div className="form-group">
                    <label htmlFor="couponCode">Longitude</label>
                    <input
                        name="Longitude"
                        type="text"
                        className="form-control"
                        placeholder="Longitude"
                        ref={longitude}
                        defaultValue={selectedEditBranchValues ? selectedEditBranchValues.location.longitude : ''}/>
                </div>

                <div className="form-group">
                    <label htmlFor="couponCode">Latitude</label>
                    <input
                        name="Latitude"
                        type="text"
                        className="form-control"
                        placeholder="Latitude"
                        ref={latitude}
                        defaultValue={selectedEditBranchValues ? selectedEditBranchValues.location.latitude : ''}/>
                </div>

                <button type="submit" className="btn btn-gradient-primary me-2" onClick={handleSave}>
                    {isAddBranchFormActive ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => {isAddBranchFormActive ? isAddBranchFormActive() : isEditBranchFormActive()}} className="btn btn-light">Cancel</button>
		    </form>
            </div>
        </>  
    )
}

export default AddBranch