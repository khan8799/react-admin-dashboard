import React from 'react'

export default function ProductSalesandMore(props) {
  return (


        
          <div className="card-body">
            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="" />
            <h4 className="font-weight-normal mb-3">
              {props.tag1}
              <i className="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 className="mb-5">{props.tag2}</h2>
            <h6 className="card-text">{props.tag3}</h6>
          </div>

      )
}
