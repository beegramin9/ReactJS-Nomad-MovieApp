import defaultAxios from "axios";
import { useEffect, useState } from "react";

/* axios는 객체에 정보를 받아오는데, 만약 받아오는 객체가 없다면
default값으로 defaultAxios를 사용한다. */
export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        isFullyLoaded: false,
        fetchedData: null,
        error: null
    })
    useEffect( ()=>{
        /* Promise */
        axiosInstance(options).then(data => {
            setState({...state, isFullyLoaded: true, fetchedData: data})
        }).catch(error => {
            setState({...state, isFullyLoaded: true, error: error})
        }) 
    }, [])
    
    return {...state};
}