import React from "react";
import { usePagination } from "../../hooks/usePagination";
/* 블로그에서는 페이지네이션에 무비 컴포넌트를 불러온다 */
/* 구현을 다 해놓고, 이걸 Global Component로 갈지 말지는 */
function Pagination() {
    const {currentMovieList, totalCountOfPage, changePage} = usePagination()
    return (
        <ReactPaginate 
        previousLabel={"<<"}  
        nextLabel={">>"}
        pageCount={totalCountOfPage}
        onPageChange={changePage}
        containerClassName={"paginationButtion"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDiabled"}
        activeClassName={"paginationActive"}/>
    )
}


export default Pagination;