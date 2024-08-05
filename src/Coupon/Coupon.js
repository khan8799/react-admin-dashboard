import React, { useState } from 'react'
import Card from '../components/Card'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import CouponList from './CouponList'
import CouponAdd from './CouponAdd'
import Loader from '../shared/components/Loader/Loader'

export default function Coupon() {
    const [loading, toggleLoading] = useState(false)
    const [selectedCoupon, setSelectedCoupon] = useState(null)
    const [refreshCoupons, setRefreshCoupons] = useState(false)

    const changeLoadingState = (state) => {
        toggleLoading(state)
    }

    const handleEdit = (coupon) => {
        setSelectedCoupon(coupon)
    }

    const refreshCoupon = () => {
        setRefreshCoupons(true)
    }

    return (
        <>
            <Breadcrumb name="Coupon" />

            {loading && <Loader />}

            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <Card title="Coupon">
                        <CouponList
                            toggleLoading={changeLoadingState}
                            onEdit={handleEdit}
                            refreshCoupons={refreshCoupons}></CouponList>
                    </Card>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <Card title="Add Coupon">
                        <CouponAdd
                            toggleLoading={changeLoadingState}
                            selectedCoupon={selectedCoupon}
                            refreshCoupons={refreshCoupon}></CouponAdd>
                    </Card>
                </div>
            </div>
        </>
    )
}
