import { useEffect, useState } from "react";

export const usePagination = (totalMovieList) => {
    const [pageNumber, setPageNumber] = useState(1);

    const numOfMoviePerPage = 10
    const numOfMovieDisplayed = pageNumber * numOfMoviePerPage

    const currentMovieList = totalMovieList.slice(numOfMovieDisplayed, numOfMovieDisplayed+numOfMoviePerPage)
    const totalCountOfPage = Math.ceil(totalMovieList.length / numOfMoviePerPage)

    const changePage = ({selected}) => {
        // ReactPaginate has a prop named Selected
        setPageNumber(selected)
    }

    return {currentMovieList, totalCountOfPage, changePage}
} 