import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { makeRequest } from './../shared/utilities/httpHelper'

export default function BrandList({ toggleLoading }) {
    const [brands, setBrands] = useState([]);
    useEffect(() => getBrands(), [])

    const getBrands = () => {
        makeRequest('category')
            .then(res => setBrands(res.payload))
            .finally(() => toggleLoading(false))
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand, index) => {
                        return (
                            <tr key={ index + 1 }>
                                <td> { index + 1 } </td>
                                <td> { brand.name } </td>
                                <td> { brand.description } </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}
