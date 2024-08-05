import React, { useEffect, useState, useRef } from 'react'
import Table from '../components/Table';
import { makeRequest } from './../shared/utilities/httpHelper'
import { useSnackbar } from 'notistack';
import Pagination from '../shared/components/Pagination/Pagination';

export default function BranchList({ toggleLoading, newBranch, onEdit }) {
  console.log("branchList ");

    const [branch, setBranchs] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [searchText, setSearchText] = useState('');

    const [totalItems, setTotalItems] = useState(null);
    const searchElement = useRef();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let selectedBranch = null;

    useEffect(() => getBranchs(), [newBranch, pageNo, searchText])

    const getBranchs = () => {
        toggleLoading(true)
        const url = `branch?page=${pageNo}&searchText=${searchText}`
        makeRequest(url)
            .then(res => {
                setBranchs(res.payload)
                setTotalItems(res.totalRecords)
                console.log(res);
            })
            .finally(() => toggleLoading(false))
    }

    const onDelete = (branch) => {
        selectedBranch = branch
        enqueueSnackbar(`Do you really want to delete ${branch.name} branch?`, {
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
                deleteBranch()

            }}>
                Yes, Delete it
            </button>
            <button className="btn btn-sm btn-success" onClick={() => { closeSnackbar() }}>
                No
            </button>
        </>
    );

    const deleteBranch = () => {
        toggleLoading(true)
        const { _id } = selectedBranch
        const url = `branch/${_id}`
        makeRequest(url, {method: 'DELETE'})
            .then(res => {
                removeDeletedBranchFromList()
                enqueueSnackbar(`${selectedBranch.name} Branch has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true
                })
            })
            .finally(() => toggleLoading(false))
    }

    const removeDeletedBranchFromList = () => {
        const branchsAfterDelete = branch.filter(branch => branch._id !== selectedBranch._id)
        setBranchs(branchsAfterDelete)
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
                        <th>Branch Name </th>
                        <th> Longitude </th>
                        <th> Latitude </th>
                    </tr>
                </thead>
                <tbody>
                    {branch.map((branch, index) => {
                        return (
                            <tr key={ branch._id }>
                                <td> { index + 1 + (pageNo - 1) * 10} </td>
                                <td> { branch.name } </td>
                                <td>
                                    <div  className="w-100 ">
                                        { branch.location.longitude } 
                                    </div>
                                </td>
                                <td>
                                    <div  className="w-100 ">
                                        { branch.location.latitude
                                        } 
                                    </div>
                                </td>
                                <td>
                                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                                        <button
                                            type="button"
                                            className="btn btn-inverse-danger btn-rounded btn-icon"
                                            onClick={() => onDelete(branch)}>
                                            <i className="mdi mdi-trash-can"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-inverse-success btn-rounded btn-icon"
                                            onClick={() => onEdit(branch)}>
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
