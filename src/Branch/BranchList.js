import React, { useEffect, useRef, useState } from 'react'
import Table from '../components/Table';
import { makeRequest } from '../shared/utilities/httpHelper';
import { useSnackbar } from 'notistack';
import Pagination from '../shared/components/Pagination/Pagination';

export default function BranchList({toggleLoading}) {

    const [branches, setBranches] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalItems, settotalItems] = useState();
    const [searchText, setSearchText] = useState('')
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const searchElement = useRef()
    let selectedBranch = null;

    useEffect(() => {getBranch()}, [searchText, pageNo] )

    const getBranch = () => {
        toggleLoading(true)
        const url = `branch?page=${pageNo}&searchText=${searchText}`
        makeRequest(url)
        .then(res => {
            setBranches(res.payload)
            settotalItems(res.totalRecords)
            
        })
        .finally(() => toggleLoading(false))
    }

    const onDelete = (branch) => {
        selectedBranch = branch;

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
                enqueueSnackbar(`${selectedBranch.name} branch has been deleted successfully`, {
                    variant: 'success',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    preventDuplicate: true,
                    persist: false
                })
                getBranch()
            })
            .finally(() => toggleLoading(false))
    }

    const onSearch = () => {
        setPageNo(1);
        setSearchText(searchElement.current.value)
    }

    const onReset = () => {
        searchElement.current.value = ''
        setSearchText('')
    }
    
    const removeDeletedBranchFromList = () => {
        const branchAfterDelete = branches.filter(branch => branch._id !== selectedBranch._id)
        setBranches(branchAfterDelete)
    }

    const handlePageChange = (page) => {
        setPageNo(page)
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
                    onClick={onSearch}>Search</button>
                <button
                    type="button"
                    className="btn btn-inverse-danger"
                    onClick={onReset}>reset</button>
            </div>
        
            <Table>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Latitude</th>
                        <th> Longitude</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch, index) => {
                        return (
                            <tr key={ branch._id }>
                                <td> {  index + 1 + ((pageNo - 1) * 10)  } </td>
                                <td> { branch.name } </td>
                                <td> { branch.location.latitude } </td>
                                <td> { branch.location.longitude} </td>
                                <td>
                                    <div  className="w-100 ">
                                        
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
                                            className="btn btn-inverse-success btn-rounded btn-icon">
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
