import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import Pagination from '../shared/components/Pagination/Pagination';
import { makeRequest } from '../shared/utilities/httpHelper';
import { closeSnackbar, enqueueSnackbar } from 'notistack';

export default function BranchList({ toggleLoading }) {
    const [coupons, setCoupon] = useState([])
    useEffect(() => getCoupons(), [])
    let selectedCoupon = null;

    const getCoupons = () => {
        toggleLoading(true)
        const url = `coupon`
        makeRequest(url)
            .then(res => {
                setCoupon(res.payload)
            })
            .finally(() => toggleLoading(false))
    }

    const onDelete = (coupon) => {
        selectedCoupon = coupon;
        enqueueSnackbar(`Do you really want to delete ${coupon.name} coupon?`, {
            variant: 'error',
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
            action,
            persist: true,
            preventDuplicate: true
        })
    }

    const action = () => (

        <>
            <button className="btn btn-sm btn-danger me-2" onClick={() => {
                closeSnackbar()
                deleteCoupon()
            }}>
                Yes, Delete it
            </button>
            <button className="btn btn-sm btn-success" onClick={() => closeSnackbar()}>
                No
            </button>
        </>
    );

    const deleteCoupon = () => {
        const url = `coupon/${selectedCoupon._id}`
        makeRequest(url, { method: 'DELETE' })
            .then(res => {
                enqueueSnackbar(`${selectedCoupon.name} coupon has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: { vertical: 'top', horizontal: 'center' },
                    preventDuplicate: true
                })
                getCoupons()
            })
    }

    return (
        <>
            <div className="d-flex mb-2" role="search">
                <input
                    type="text"
                    className="form-control form-control-dark text-bg-dark"
                    placeholder="Search..."
                    aria-label="Search" />
                <button
                    type="button"
                    className="btn btn-inverse-primary me-1">Search</button>
                <button
                    type="button"
                    className="btn btn-inverse-danger">reset</button>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Latitude </th>
                        <th> Longitude </th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon, index) => {
                        return (
                            <tr key={coupon._id}>
                                <td> {index + 1} </td>
                                <td> {coupon.name} </td>
                                <td>
                                    <div className="w-100 ">
                                        {coupon.couponCode}
                                    </div>
                                </td>
                                <td>
                                    <div className="w-100 ">
                                        {coupon.couponCode}
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon"
                                            onClick={() => onDelete(coupon)}>
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon">
                                            <i className="mdi mdi-content-save-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination />
        </>
    )
};