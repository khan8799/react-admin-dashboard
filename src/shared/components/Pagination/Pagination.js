import React, { useEffect, useState } from 'react'

export default function Pagination({totalRecords, handlePageChange}) {
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (totalRecords) {
            const totalPage = Math.ceil(totalRecords / 10)
            const arr = Array(totalPage).fill(1).map((e, i) => e + (i * 1));
            setPages(arr)
        }
    }, [totalRecords])

    const onPageChange = (pageNo) => {
        setCurrentPage(pageNo)
        handlePageChange(pageNo)
    }

    return (
        <nav className="mt-4" aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                    <a className="page-link" tabIndex="-1">Previous</a>
                </li>

                {
                    pages.map(page => {
                        return (
                            <li
                                className={`page-item ${currentPage === page ? 'active': ''}`}
                                key={page}
                                onClick={() => onPageChange(page)}>
                                <a className="page-link">
                                    { page }
                                </a>
                            </li>
                        )
                    })
                }
                
                <li className="page-item">
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    )
}
