import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Card from '../components/Card'
import BranchList from './BranchList'
import AddBranch from './AddBranch'
import { useEffect, useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper';
import Loader from '../shared/components/Loader/Loader'

function Branch () {
    
    const [loading, setLoading] = useState(false)
    const [branch, setBranch] = useState([])
    const [isAddBranchFormActive, setIsAddBranchFormActive] = useState(false)

    useEffect(() => getBranch(), [])

    const getBranch = () => {
        setLoading(true)
        const url = `branch`
        makeRequest(url)
        .then(res => {
            setBranch(res.payload)
        })
        .finally(() => setLoading(false))
    }

    const addBranchForm = () => {
        setIsAddBranchFormActive(!isAddBranchFormActive)
    }

    const addNewBranchInList = (newBranch) => {
        setBranch([newBranch, ...branch]);
    }

    return (
        <>
            <div className="content">
            <Breadcrumb name="Branch" />

            {isAddBranchFormActive && <AddBranch isAddBranchFormActive={addBranchForm} addNewBranchInList={addNewBranchInList}/>}

            {loading && <Loader />}

            <button onClick={() => addBranchForm()} className='btn btn-gradient-primary mb-3'> Add Branch</button>

            <div className="row">
                <div className="grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList branch={branch} getBranch={getBranch}/>
                    </Card>
                </div>

            </div>
            </div>
        </>
    )
}

export default Branch