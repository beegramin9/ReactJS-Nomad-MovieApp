import { useEffect, useState } from "react";
import defaultAxios from "axios";

export const useFetchMovieAndMakePagination = (options, axiosInstance = defaultAxios) => {
    const [totalMovieList, setTotalMovieList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    /* 처음으로 다시 돌아올 때 안되는건가 */
    const [numOfMoviePerPage, setNumOfMoviePerPage] = useState(4);


    useEffect( ()=>{
        const fetchMovieData = async () => {
            const response = await axiosInstance(options)
            const {data: {data: {movies : totalMovieList}}}= response
            setTotalMovieList(totalMovieList)
            setIsLoading(false);
        }
        fetchMovieData();
    }, []);


    /* numOfMoviePerPage도 state니까, 매번 변하게 하려면 useState를 사용해야 함 */
    /* 맨 첨부터 실행될때는 잘 안되네,, 결국 useEffect를 써야하나 */
    useEffect( () => {
        /* 이렇게하면 맨 처음일때, 즉 resize가 일어나지 않았을 때에는 
        screenWidth에 관계없이 항상 기본값 4가 되고, resize가 일어났을 때 비로소 이렇게 된다
        즉, eventListner 뿐만 아니라 맨 처음 상태에도 더해줘야 한다. */
        const screenWidth  = window.innerWidth;
        if (screenWidth < 730) {
            setNumOfMoviePerPage(1);
        } else if (screenWidth < 960) {
            setNumOfMoviePerPage(2);
        } else {
            setNumOfMoviePerPage(4);
        }
        window.addEventListener('resize', () => {
            const screenWidth  = window.innerWidth;
            if (screenWidth < 730) {
                setNumOfMoviePerPage(1);
            } else if (screenWidth < 960) {
                setNumOfMoviePerPage(2);
            } else {
                setNumOfMoviePerPage(4);
            }
        });
    }, []);


    const numOfMovieDisplayed = pageNumber * numOfMoviePerPage
    const currentMovieList = totalMovieList.slice(numOfMovieDisplayed, numOfMovieDisplayed+numOfMoviePerPage)
    const totalCountOfPage = Math.ceil(totalMovieList.length / numOfMoviePerPage)

    const changePage = ({selected}) => {
        // ReactPaginate has a prop named Selected
        setPageNumber(selected)
    }

    return {isLoading, currentMovieList, totalCountOfPage, changePage}
} 