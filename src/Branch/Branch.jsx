import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Card from '../components/Card'
import BranchList from './BranchList'
import AddBranch from './AddBranch'
import { useEffect, useRef, useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper';
import Loader from '../shared/components/Loader/Loader'

function Branch () {
    
    const [loading, setLoading] = useState(false)
    const [branch, setBranch] = useState([])
    const [branchList, setBranchList] = useState([])
    const [isAddBranchFormActive, setIsAddBranchFormActive] = useState(false)

    useEffect(() => getBranch(), [])

    useEffect(() => setBranchList(branch),[branch])

    const search = useRef('')

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

    const searchBranch = () => {
        const filterBranch = branch.filter((list) => list.name.toLowerCase().includes(search.current.value.toLowerCase()))
        console.log(filterBranch);
        setBranchList(filterBranch);
        search.current.value = ''
    }

    const allList = () => setBranchList(branch)

    return (
        <>
            <Breadcrumb name="Branch" />

            {isAddBranchFormActive && <AddBranch isAddBranchFormActive={addBranchForm} addNewBranchInList={addNewBranchInList}/>}

            {loading && <Loader />}

            <button onClick={() => addBranchForm()} className='btn btn-gradient-primary mb-3'> Add Branch</button>

            <div className="filter">
                <button onClick={() => allList()}>All</button>
        
                <input ref={search} type="text" placeholder='Search Branch'/>
                <button onClick={() => searchBranch()} className='mdi mdi-magnify'></button>
            </div>

            <div className="row">
                <div className="grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList branch={branchList} setBranchList={setBranchList}/>
                    </Card>
                </div>

            </div>
        </>
    )
}

export default Branch