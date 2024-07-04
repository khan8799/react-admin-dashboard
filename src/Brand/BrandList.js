import React, { useEffect, useState, useRef } from 'react'
import Table from '../components/Table';
import { makeRequest } from './../shared/utilities/httpHelper'
import { useSnackbar } from 'notistack';
import Pagination from '../shared/components/Pagination/Pagination';

export default function BrandList({ toggleLoading, newBrand, onEdit }) {
    const [brands, setBrands] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [totalItems, setTotalItems] = useState(null);
    const searchElement = useRef();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let selectedBrand = null;

    useEffect(() => getBrands(), [newBrand, pageNo, searchText])

    const getBrands = () => {
        toggleLoading(true)
        const url = `brand?page=${pageNo}&searchText=${searchText}`
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

    const handleSearch = () => {
        setSearchText(searchElement.current.value)
    }

    const resetSearch = () => {
        searchElement.current.value = ''
        setSearchText('')
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
                    onClick={handleSearch}>Search</button>
                <button
                    type="button"
                    className="btn btn-inverse-danger"
                    onClick={resetSearch}>reset</button>
            </div>
        
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
