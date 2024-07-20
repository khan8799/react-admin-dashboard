import React, { useEffect, useRef, useState } from 'react'
import Pagination from '../shared/components/Pagination/Pagination';
import Table from '../components/Table';
import { makeRequest } from '../shared/utilities/httpHelper';
import { useSnackbar } from 'notistack';

export default function CouponList({toggleLoading, onEdit, refreshCoupons}) {
    const [coupons, setCoupons] = useState([])
    const [totalRecords, setTotalRecords] = useState(1)
    const [searchText, setSearchText] = useState('')
    const [pageNo, setPageNo] = useState(1)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const searchElement = useRef()

    let selectedCoupon = null;

    useEffect(() => getCoupons(), [searchText, pageNo, refreshCoupons])

    const getCoupons = () => {
        toggleLoading(true)
        const url = `coupon?searchText=${searchText}&page=${pageNo}`
        makeRequest(url)
        .then(res => {
            setCoupons(res.payload)
            setTotalRecords(res.totalRecords)
        })
        .finally(() => toggleLoading(false))
    }

    const onDelete = (coupon) => {
        selectedCoupon = coupon;
        enqueueSnackbar(`Do you really want to delete ${coupon.name} coupon?`, {
            variant: 'error',
            anchorOrigin: {vertical: 'top', horizontal: 'center'},
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
        toggleLoading(true)
        const url = `coupon/${selectedCoupon._id}`
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                enqueueSnackbar(`${selectedCoupon.name} coupon has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
                getCoupons()
            })
            .finally(() => toggleLoading(false))
    }

    const onSearch = () => {
        setPageNo(1);
        setSearchText(searchElement.current.value)
    }

    const onReset = () => {
        searchElement.current.value = ''
        setSearchText('')
    }

    const handlePageChange = (pageNo) => {
        setPageNo(pageNo);
    }

    const handleEdit = (coupon) => {
        onEdit(coupon)
    }

    return (
        <>
            <div className="d-flex mb-2" role="search">
                <input
                    ref={searchElement}
                    type="text"
                    className="form-control form-control-dark text-bg-dark"
                    placeholder="Search..."
                    aria-label="Search"/>
                <button
                    type="button"
                    className="btn btn-inverse-primary me-1"
                    onClick={onSearch}>Search</button>
                <button
                    type="button"
                    className="btn btn-inverse-danger"
                    onClick={onReset}>reset</button>
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
                            <tr key={ coupon._id }>
                                <td> { index + 1 + ((pageNo - 1) * 10) } </td>
                                <td> { coupon.name } </td>
                                <td>
                                    <div  className="w-100 ">
                                        { coupon.couponCode } 
                                    </div>
                                </td>
                                <td>
                                    {  coupon.type === 'fixed' ? `${coupon.discount}$` : `${coupon.discount}%` } 
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
                                            className="btn btn-inverse-success btn-rounded btn-icon"
                                            onClick={() => handleEdit(coupon)}>
                                            <i className="mdi mdi-content-save-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination
                totalRecords={totalRecords}
                handlePageChange={handlePageChange}/>
        </>
    )
}
