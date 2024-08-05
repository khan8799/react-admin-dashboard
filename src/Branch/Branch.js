import React, { useState } from 'react'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Card from '../components/Card'
import Loader from '../shared/components/Loader/Loader'
import BranchList from './BranchList'
import BranchAdd from './BranchAdd'

export default function Branch() {
    const [isLoading, setIsLoading] = useState(false)
    const [newBranch, setnewBranch] = useState(null)
    const [selectedBranch, setSelectedBranch] = useState()

    return (
        <>
            <Breadcrumb name="Branch" />

            { isLoading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList
                            toggleLoading={setIsLoading}
                            newBranch={newBranch}
                            onEdit={setSelectedBranch}/>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd
                            toggleLoading={setIsLoading}
                            onAddBranch={setnewBranch}
                            selectedBranch={selectedBranch}/>
                    </Card>
                </div>
            </div>
        </>
    )
}
