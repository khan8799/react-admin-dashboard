import './SummaryDetail.css';

function SummaryDetail({carts}){
    return (
        <>
             <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-danger card-img-holder text-white">
                                <div className="card-body">
                                    {/* <img alt="" src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" /> */}
                                    <h4 className="font-weight-normal mb-3">
                                        {carts.des}
                                        <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                                    </h4>
                                    <h2 className="mb-5">{carts.price}</h2>
                                    <h6 className="card-text">{carts.name}</h6>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default SummaryDetail;