import { useRef } from "react"
import { makeRequest } from '../shared/utilities/httpHelper';
import { useSnackbar } from 'notistack';
import { branchFormFeild } from '../shared/utilities/formsFeildList'


function AddBranch ({ selectedEditBranchValues, isAddBranchFormActive, isEditBranchFormActive, addNewBranchInList, addEditBranchInList}) {
    
    const { enqueueSnackbar } = useSnackbar();

    let formValues = {}    

    const branchName = useRef('')
    const address = useRef('') 
    const landmark = useRef('') 
    const locality = useRef('') 
    const city = useRef('')
    const state = useRef('')
    const pincode = useRef('')
    const longitude = useRef('') 
    const latitude = useRef('')

    const useRefList = [branchName, address, landmark, locality, city, state, pincode, longitude, latitude]
    
    const editBranchValue = [selectedEditBranchValues?.name, selectedEditBranchValues?.address, selectedEditBranchValues?.landmark, selectedEditBranchValues?.locality, selectedEditBranchValues?.city, selectedEditBranchValues?.state, selectedEditBranchValues?.pincode, selectedEditBranchValues?.location?.longitude, selectedEditBranchValues?.location?.latitude]
    
    // ADD NEW BRANCH

    const addBranch = () => {
        const branchDetail = {
            name: branchName.current.value,
            address: address.current.value,
            landmark: landmark.current.value,
            locality: locality.current.value,
            city: city.current.value,
            state: state.current.value,
            pincode: Number(pincode.current.value),
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
            <div className="form-container">
            <form className="form overflow-auto" onSubmit={(e) => e.preventDefault()}>
            {selectedEditBranchValues ? <h3 className="mb-4">{`Edit ${selectedEditBranchValues.name} Branch`}</h3> : ''}

                {branchFormFeild.map((list, i) => {
                    // let ref = list.ref
                    
                    return(
                        <div className="form-group">
                            <label htmlFor="name">{list.name}</label>
                            <input
                                name={list.name}
                                type="text"
                                className="form-control"
                                placeholder={list.placeholder}
                                ref={useRefList[i]}
                                defaultValue={selectedEditBranchValues ? editBranchValue[i] : ''}/>
                        </div>
                    )
                })}
                
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