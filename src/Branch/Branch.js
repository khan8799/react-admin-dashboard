import Card from "../components/Card";
import BranchAdd from "../Branch/BranchAdd";
import BranchList from "../Branch/BranchList";
import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";

export default function Branch(){
    
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