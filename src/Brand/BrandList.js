import React, { useState } from 'react'
import Card from '../components/Card';
import Table from '../components/Table';

export default function BrandList() {
    const [brands, setBrands] = useState([1, 2, 3]);

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
