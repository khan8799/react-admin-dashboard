import React, { useState } from 'react'
import BranchAdd from './BranchAdd'
import BranchList from './BranchList'
import Card from '../components/Card'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'

export default function Branch() {

  return (
        <>
            <Breadcrumb name="Branch"/>

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList />
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd />
                    </Card>
                </div>
            </div>
        </>
    )
}
