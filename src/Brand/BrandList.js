import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { makeRequest } from './../shared/utilities/httpHelper'
import Alert from '../shared/components/Alert/Alert';
import { useSnackbar } from 'notistack';

export default function BrandList({ toggleLoading, newBrand }) {
    const [brands, setBrands] = useState([]);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let selectedBrand;

    useEffect(() => getBrands(), [newBrand])

    const getBrands = () => {
        toggleLoading(true)
        makeRequest('brand')
            .then(res => setBrands(res.payload))
            .finally(() => toggleLoading(false))
    }

    const action = () => (
        <>
            <button className="btn btn-sm btn-danger me-2" onClick={() => {
                deleteBrand()
                closeSnackbar()
            }}>
                Yes, Delete it
            </button>
            <button className="btn btn-sm btn-primary" onClick={closeSnackbar}>
                No
            </button>
        </>
    );

    const showConfirm = (brand) => {
        selectedBrand = brand
        enqueueSnackbar(`Do you really want to delete ${brand.name}`, {
            action,
            variant: 'error',
            anchorOrigin: { vertical: 'top', horizontal: 'center' }
        })
    }

    const deleteBrand = () => {
        toggleLoading(true)

        const url = `brand/${selectedBrand._id}`
        const option = {
            method: 'DELETE',
        }
        makeRequest(url, option)
            .then(res => removeDeletedBrandFromList())
            .finally(() => toggleLoading(false))
    }

    const removeDeletedBrandFromList = () => {
        const newBrands = brands.filter(brand => brand._id !== selectedBrand._id)
        setBrands(newBrands)
    }

    return (
        <>
            <Alert />
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th>  </th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand, index) => {
                        return (
                            <tr key={ index + 1 }>
                                <td> { index + 1 } </td>
                                <td> { brand.name } </td>
                                <td>
                                    <div  className="w-100 ">
                                        { brand.description } 
                                    </div>
                                </td>
                                <td>
                                    <div className='template-demo d-flex justify-content-between flex-nowrap'>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon"
                                            onClick={() => showConfirm(brand)}>
                                                <i className="mdi menu-icon mdi-trash-can"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon"
                                            onClick={showConfirm}>
                                                <i className="mdi menu-icon mdi-content-save-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}
