import React, { useState } from 'react'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import BrandAdd from './BrandAdd'
import BrandList from './BrandList'
import Card from '../components/Card'
import Loader from '../shared/components/Loader/Loader'

export default function Brand() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <Breadcrumb name="Brand" />

            { isLoading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Brand">
                        <BrandList toggleLoading={(state) => setIsLoading(state)}/>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Brand">
                        <BrandAdd  toggleLoading={(state) => setIsLoading(state)}/>
                    </Card>
                </div>
            </div>
        </>
    )
}
