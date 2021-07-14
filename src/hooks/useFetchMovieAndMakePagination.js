import { useEffect, useState } from "react";
import defaultAxios from "axios";

export const useFetchMovieAndMakePagination = (options, axiosInstance = defaultAxios) => {
    const [totalMovieList, setTotalMovieList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
        const fetchMovieData = async () => {
            const response = await axiosInstance(options)
            const {data: {data: {movies : totalMovieList}}}= response
            setTotalMovieList(totalMovieList)
            setIsLoading(false);
        }
        fetchMovieData();
    }, [])

    const numOfMoviePerPage = 4
    const numOfMovieDisplayed = pageNumber * numOfMoviePerPage

    const currentMovieList = totalMovieList.slice(numOfMovieDisplayed, numOfMovieDisplayed+numOfMoviePerPage)
    const totalCountOfPage = Math.ceil(totalMovieList.length / numOfMoviePerPage)

    const changePage = ({selected}) => {
        // ReactPaginate has a prop named Selected
        setPageNumber(selected)
    }

    return {isLoading, currentMovieList, totalCountOfPage, changePage}
} 