import React, { useEffect, useState } from 'react'
import { makeRequest } from '../shared/utilities/httpHelper'
import { useSnackbar } from 'notistack';

export default function CouponAdd({toggleLoading, selectedCoupon, refreshCoupons}) {
  const initialValues = {name: '', couponCode: '', type: 'percent', discount: 10, description: ''}
  const [formValues, setFormValues] = useState(initialValues)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (!selectedCoupon) return;

    setFormValues({
      name: selectedCoupon.name,
      couponCode: selectedCoupon.couponCode,
      type: selectedCoupon.type,
      discount: selectedCoupon.discount,
      description: selectedCoupon.description
    })
  }, [selectedCoupon])

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormValues({
			...formValues,
			[name]: value
		})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleLoading(true);
    selectedCoupon ? updateCoupon() : addCoupon()
  }

  const addCoupon = () => {
    makeRequest('coupon', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      setFormValues(initialValues);
      enqueueSnackbar(`Coupon has been created successfully`, {
        variant: 'success',
        anchorOrigin: {vertical: 'top', horizontal: 'center'},
        preventDuplicate: true
      })
      refreshCoupons()
    })
    .finally(() => toggleLoading(false))
  }

  const updateCoupon = () => {
    const url = `coupon/${selectedCoupon._id}`
    makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      setFormValues(initialValues);
      enqueueSnackbar(`${formValues.name} Coupon has been updated successfully`, {
        variant: 'success',
        anchorOrigin: {vertical: 'top', horizontal: 'center'},
        preventDuplicate: true
      })
      refreshCoupons()
    })
    .finally(() => toggleLoading(false))
  }

  return (
		<form className="forms-sample" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
					placeholder="eg. FLAT 10% OFF"
          value={formValues.name}
          onChange={handleChange}/>
			</div>

      <div className="form-group">
				<label htmlFor="couponCode">Coupon Code</label>
				<input
					name="couponCode"
					type="text"
					className="form-control"
					placeholder="eg. FLAT10, FIRST50"
          value={formValues.couponCode}
          onChange={handleChange}/>
			</div>

      <div className="form-group">
        <label htmlFor="type">Discount Type</label>
        <select className="form-control" id="type" name="type" value={formValues.type} onChange={handleChange}>
          <option value="percent">Percent</option>
          <option value="fixed">Fixed</option>
        </select>
      </div>

      <div className="form-group">
				<label htmlFor="discount">Discount</label>
				<input
					name="discount"
					type="number"
					className="form-control"
					placeholder="eg. 10, 25"
          value={formValues.discount}
          onChange={handleChange}/>
			</div>

			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea
					name="description"
					className="form-control"
					id="description"
					rows="4"
          value={formValues.description}
          onChange={handleChange}></textarea>
			</div>

			<button type="submit" className="btn btn-gradient-primary me-2">Save</button>
			<button className="btn btn-light">Cancel</button>
		</form>
	)
}
