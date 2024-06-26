function AppSummary({summaryreport}) {

    return (
        <>
            <div className="col-md-4 stretch-card grid-margin">
                <div className= {`card card-img-holder text-white ${summaryreport.parentClass}`}>
                    <div className="card-body">
                        <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">
                            {summaryreport.title}
                            <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                        </h4>
                        <h2 className="mb-5">
                            {summaryreport.summary}
                        </h2>
                        <h6 className="card-text">
                            {summaryreport.description}
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppSummary;