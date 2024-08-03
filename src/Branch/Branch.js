import React, { useState } from 'react'
import BranchAdd from './BranchAdd'
import BranchList from './BranchList'
import Card from '../components/Card'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import Loader from '../shared/components/Loader/Loader'

export default function Branch() {

    const [isLoading, setIsLoading] = useState()

    const changeLoadingState = (status) =>{
        setIsLoading(status)
    }

  return (
        <>
            <Breadcrumb name="Branch"/>

            {isLoading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList 
                         toggleLoading={changeLoadingState}/>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd 
                         toggleLoading={changeLoadingState}/>
                    </Card>
                </div>
            </div>
        </>
    )
}
