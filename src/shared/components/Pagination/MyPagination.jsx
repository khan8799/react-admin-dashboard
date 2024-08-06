
export default function MyPagination({postPerPage, totalBranch, setCurrentPage, currentPage}) {

    const pageNo = [];

    for(let i = 1; i <= Math.ceil((totalBranch.length)/postPerPage); i++){
        pageNo.push(i)
    }


    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">

                <li class="page-item page-link disabled">
                    Previous
                </li>
                
                {pageNo.map((page) => {
                    return (
                        <li onClick={() => setCurrentPage(page)} className={page === currentPage ? 'page-item active' : 'page-iteam'}>
                            <div className="page-link">{page}</div>
                        </li>
                    );
                    
                })}

                <li class="page-item page-link">
                    Next
                </li>
            </ul>
        </nav>
    )
}
