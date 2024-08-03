import Card from "../components/Card";
import BranchAdd from "../Branch/BranchAdd";
import BranchList from "../Branch/BranchList";
import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";
import { useState } from "react";
import Loader from "../shared/components/Loader/Loader";

export default function Branch(){
    const [loading, toggleLoading] = useState()
    
    const changeLoadingState = (state) => {
        toggleLoading(state)
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
                        ></BranchList>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Branch">
                        <BranchAdd 
                        toggleLoading={changeLoadingState}
                        ></BranchAdd>
                    </Card>
                </div>
            </div>
        </>
    )
}