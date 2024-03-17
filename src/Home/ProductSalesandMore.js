import React from "react";

export default function ProductSalesandMore(props) {
  return (
    <>
      {/* <div className="card-body">
            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="" />
            <h4 className="font-weight-normal mb-3">
              {props.tag1}
              <i className="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 className="mb-5">{props.tag2}</h2>
            <h6 className="card-text">{props.tag3}</h6>
          </div> */}

      <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <ProductSalesandMore
              tag1="Weekly Sales"
              tag2="$15000"
              tag3="Increased By 60%"
            />
            <ProductSalesandMore
              tag1="Weekly Orders"
              tag2="45,6334"
              tag3="Decreased By 20%"
            />
            <ProductSalesandMore
              tag1="Visitors Online "
              tag2="95,5741"
              tag3="Increased by 5%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
