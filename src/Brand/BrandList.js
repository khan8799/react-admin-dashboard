import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Table from '../components/Table';
import { API_URL } from './../shared/utilities/httpHelper'

export default function BrandList() {
    const url = `${API_URL}category`;
    const [brands, setBrands] = useState([]);

    useEffect(() => getBrands(), [])

    const getBrands = () => {
        fetch(url)
            .then(res => res.json())
            .then(res => setBrands(res.payload))
    }

    return (
        <Card title="Project Status">
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
        </Card>
    )
}
