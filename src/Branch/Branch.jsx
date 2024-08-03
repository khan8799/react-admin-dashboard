import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Card from '../components/Card'
import BranchList from './BranchList'
import AddBranch from './AddBranch'
import { useEffect, useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper';
import Loader from '../shared/components/Loader/Loader'



function Branch () {
    
    const [loading, toggleLoading] = useState(false)
    const [branch, setBranch] = useState([])
    const [isAddBranchFormActive, setIsAddBranchFormActive] = useState(false)

    useEffect(() => getBranch(), [])

    const getBranch = () => {
        toggleLoading(true)
        const url = `coupon`
        makeRequest(url)
        .then(res => {
            setBranch(res.payload)
        })
        .finally(() => toggleLoading(false))
    }

    const addBranchForm = () => {
        setIsAddBranchFormActive(!isAddBranchFormActive)
    }

    console.log('branch');

    return (
        <>
            <Breadcrumb name="Branch" />

            {isAddBranchFormActive && <AddBranch isAddBranchFormActive={addBranchForm}/>}

            {loading && <Loader />}

            <button onClick={() => addBranchForm()} className='btn btn-gradient-primary mb-3'> Add Branch</button>

            <div className="row">
                <div className="grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList branch={branch} getBranch={getBranch} />
                    </Card>
                </div>

            </div>
        </>
    )
}

export default Branch