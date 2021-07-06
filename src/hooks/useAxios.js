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
        /* Hook은 항상 컴포넌트 최상위(the top of level)에서 호출되어야만 합니다. 
        만약에 조건부로 effect를 실행하기를 원한다면, 조건문을 Hook 내부에 넣을 수 있습니다. */
        axiosInstance(options).then(data => {
            setState({...state, isFullyLoaded:true, fetchedData: data})
        }).catch(error => {
            setState({...state, isFullyLoaded:true, error: error})
        })

    }, [])
    
    return {...state};
}