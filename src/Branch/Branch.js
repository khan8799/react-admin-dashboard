import React from 'react';
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb';
import Card from '../components/Card';
import BranchList from './BranchList';
import BranchAdd from './BranchAdd';

function Branch() {
    return (
        <>
            <Breadcrumb name="Branch" />
            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Branch">
                        <BranchList></BranchList>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd></BranchAdd>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Branch;