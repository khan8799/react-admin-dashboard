import React, { useState } from 'react';
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb';
import Card from '../components/Card';
import BranchList from './BranchList';
import BranchAdd from './BranchAdd';
import Loader from '../shared/components/Loader/Loader';

export default function Branch() {
    const [loading, toggleLoading] = useState(false)
    const [refreshBranches, setRefreshBranches] = useState(false)

    const changeLoadingState = (state) => {
        toggleLoading(state)
    }
    const refreshBranch = () => {
        setRefreshBranches((prev) => !prev)
    }

    return (
        <>
            <Breadcrumb name="Branch" />

            {loading && <Loader />}

            <div className="row">

                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList
                            toggleLoading={changeLoadingState}
                            refreshBranches={refreshBranches}>
                        </BranchList>
                    </Card>
                </div>

                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd
                            toggleLoading={changeLoadingState}
                            refreshBranches={refreshBranch}>
                        </BranchAdd>
                    </Card>
                </div>

            </div>
        </>
    )
};