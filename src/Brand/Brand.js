import React, { useState } from 'react'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import BrandAdd from './BrandAdd'
import BrandList from './BrandList'
import Card from '../components/Card'
import Loader from '../shared/components/Loader/Loader'

export default function Brand() {
  console.log("brand ");
    const [isLoading, setIsLoading] = useState(false)
    const [newBrand, setNewBrand] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState()

    return (
        <>
            <Breadcrumb name="Brand" />

            { isLoading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Brand">
                        <BrandList
                            toggleLoading={setIsLoading}
                            newBrand={newBrand}
                            onEdit={setSelectedBrand}/>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Brand">
                        <BrandAdd
                            toggleLoading={setIsLoading}
                            onAddBrand={setNewBrand}
                            selectedBrand={selectedBrand}/>
                    </Card>
                </div>
            </div>
        </>
    )
}
