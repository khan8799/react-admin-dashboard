function AppSummary({summary}) {
    return (
        <>
            <div className="col-md-4 stretch-card grid-margin">
                <div className={`card card-img-holder text-white ${summary.parentClass}`}>
                    <div className="card-body">
                        <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">
                            {summary.title}
                            <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                        </h4>
                        <h2 className="mb-5">
                            {summary.summary}
                        </h2>
                        <h6 className="card-text">
                            {summary.description}
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppSummary