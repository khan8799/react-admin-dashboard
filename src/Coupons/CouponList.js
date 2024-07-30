import Table from "../components/Table";
import Pagination from "../shared/components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { makeRequest } from "../shared/utilities/httpHelper";

export default function CouponList() {
  const [coupons, setCoupons] = useState([]);
  const [totalRecords, setTotalRecords] = useState(1);

  useEffect(() => getCoupons(), []);

  const getCoupons = () => {
    makeRequest("coupon").then((res) => {
      console.log(res);
      setCoupons(res.payload);
      setTotalRecords(res.totalRecords);
    });
  };

  return (
    <>
      <div className="d-flex mb-2" role="search">
        <input
          type="text"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
        />
        <button type="button" className="btn btn-inverse-primary me-1">
          Search
        </button>
        <button type="button" className="btn btn-inverse-danger">
          reset
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
            <th> Coupon Code </th>
            <th> Discount </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => {
            return (
              <tr key={coupon._id}>
                <td> {index + 1} </td>
                <td> {coupon.name} </td>
                <td>
                  <div className="w-100 ">{coupon.couponCode}</div>
                </td>
                <td>
                  {coupon.type === "fixed"
                    ? `${coupon.discount}$`
                    : `${coupon.discount}%`}
                </td>
                <td>
                  <div className="template-demo d-flex justify-content-between flex-nowrap">
                    <button
                      type="button"
                      className="btn btn-inverse-danger btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-inverse-success btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-content-save-edit"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination totalRecords={totalRecords} />
    </>
  );
}
