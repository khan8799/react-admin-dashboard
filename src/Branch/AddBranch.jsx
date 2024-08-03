import { useRef } from "react"
import { makeRequest } from '../shared/utilities/httpHelper';
import { useSnackbar } from 'notistack';


function AddBranch ({getBranch, selectedEditBranchValues, isAddBranchFormActive, isEditBranchFormActive}) {
    
    const { enqueueSnackbar } = useSnackbar();

    let formValues = {}

    const branchName = useRef('')
    const longitude = useRef(0)
    const latitude = useRef(0)

    // ADD NEW BRANCH

    const addBranch = () => {
        const branchDetail = {
            name: branchName.current.value,
            longitude: Number(longitude.current.value),
            latitude: Number(latitude.current.value),
        }
        
        console.log(branchDetail);

        makeRequest('coupon', {
          method: 'POST',
          body: JSON.stringify(branchDetail),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => { 
          enqueueSnackbar(`Branch has been created successfully`, {
            variant: 'success',
            anchorOrigin: {vertical: 'top', horizontal: 'center'},
            preventDuplicate: true
          })
        })
    }

    // EDIT BRNACH

    const editBranch = () => {
        formValues = {
            name: branchName.current.value,
            longitude: Number(longitude.current.value),
            latitude: Number(latitude.current.value),
        }
        console.log(formValues);
        
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
            getBranch()
            enqueueSnackbar(`${selectedEditBranchValues.name} Coupon has been updated successfully`, {
                variant: 'success',
                anchorOrigin: {vertical: 'top', horizontal: 'center'},
                preventDuplicate: true
            })
        })        
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
                        ref={branchName}/>
                </div>

                <div className="form-group">
                    <label htmlFor="couponCode">Longitude</label>
                    <input
                        name="Longitude"
                        type="number"
                        className="form-control"
                        placeholder="Longitude"
                        ref={longitude}/>
                </div>

                <div className="form-group">
                    <label htmlFor="couponCode">Latitude</label>
                    <input
                        name="Latitude"
                        type="number"
                        className="form-control"
                        placeholder="Latitude"
                        ref={latitude}/>
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