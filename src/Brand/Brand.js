import React from 'react'
import Breadcrumb from '../shared/components/Breadcrumb/Breadcrumb'
import BrandAdd from './BrandAdd'
import BrandList from './BrandList'

export default function Brand() {
  return (
    <>
		<Breadcrumb name="Brand" />

		<div className="row">
			<div className="col-md-7 grid-margin stretch-card">
                <BrandList />
			</div>
			<div className="col-md-5 grid-margin stretch-card">
                <BrandAdd />
			</div>
		</div>
	</>
  )
}
