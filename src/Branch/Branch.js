import React, { useState } from 'react'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Card from '../components/Card'
import Loader from '../shared/components/Loader/Loader'
import BranchList from './BranchList'
import BranchAdd from './BranchAdd'

export default function Branch() {
    const [isLoading, setIsLoading] = useState(false)
    const [newBrand, setNewBrand] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState()

    return (
        <>
            <Breadcrumb name="Branch" />

            { isLoading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList
                            toggleLoading={setIsLoading}
                            newBrand={newBrand}
                            onEdit={setSelectedBrand}/>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd
                            toggleLoading={setIsLoading}
                            onAddBrand={setNewBrand}
                            selectedBrand={selectedBrand}/>
                    </Card>
                </div>
            </div>
        </>
    )
}
