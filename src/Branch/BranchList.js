import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { makeRequest } from './../shared/utilities/httpHelper'
import { useSnackbar } from 'notistack';
import Pagination from '../shared/components/Pagination/Pagination';

export default function BranchList({ toggleLoading, newBrand, onEdit }) {
  console.log("brandList ");

    const [brands, setBrands] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalItems, setTotalItems] = useState(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let selectedBrand = null;

    useEffect(() => getBrands(), [newBrand, pageNo])

    const getBrands = () => {
        toggleLoading(true)
        const url = `brand?page=${pageNo}`
        makeRequest(url)
            .then(res => {
                setBrands(res.payload)
                setTotalItems(res.totalRecords)
            })
            .finally(() => toggleLoading(false))
    }

    const onDelete = (brand) => {
        selectedBrand = brand
        enqueueSnackbar(`Do you really want to delete ${brand.name} brand?`, {
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
                deleteBrand()

            }}>
                Yes, Delete it
            </button>
            <button className="btn btn-sm btn-success" onClick={() => { closeSnackbar() }}>
                No
            </button>
        </>
    );

    const deleteBrand = () => {
        toggleLoading(true)
        const { _id } = selectedBrand
        const url = `brand/${_id}`
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                removeDeletedBrandFromList()
                enqueueSnackbar(`${selectedBrand.name} brand has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
            })
            .finally(() => toggleLoading(false))
    }

    const removeDeletedBrandFromList = () => {
        const brandsAfterDelete = brands.filter(brand => brand._id !== selectedBrand._id)
        setBrands(brandsAfterDelete)
    }

    const handlePageChange = (page) => {
        setPageNo(page)
    }
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand, index) => {
                        return (
                            <tr key={ brand._id }>
                                <td> { index + 1 + (pageNo - 1) * 10} </td>
                                <td> { brand.name } </td>
                                <td>
                                    <div  className="w-100 ">
                                        { brand.description } 
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon"
                                            onClick={() => onDelete(brand)}>
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon"
                                            onClick={() => onEdit(brand)}>
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
                totalRecords={totalItems}
                handlePageChange={handlePageChange}/>
        </>
    )
}
